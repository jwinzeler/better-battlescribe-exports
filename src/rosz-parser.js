class RoszParser {

  static UNIT_ORDER = ['Epic Hero', 'Character', 'Battleline', 'Infantry', 'Swarm', 'Mounted', 'Beast', 'Monster', 'Vehicle', 'Dedicated Transport', 'Fortification', 'Allied Units'];

  static async unzip(file) {
    if (file.charAt(0) !== 'P') {
      return file;
    } else {
      const jszip = new JSZip();
      const zip = await jszip.loadAsync(file);
      return zip.file(/[^/]+\.ros/)[0].async('string');
    }
  }

  static async read(file) {
    Logger.log(`Reading ROSZ file...`);
    const xmldata = await this.unzip(file);
    const { roster } = new X2JS().xml_str2json(xmldata);
    const parsedRoster = {
      name: this.getRosterName(roster),
      battleSize: this.getBattleSize(roster.forces.force.selections),
      faction: this.getFaction(roster),
      rules: this.gatherAllRules(roster),
      detachment: this.getDetachment(roster.forces.force.selections),
      units: this.getUnits(roster.forces),
    };
    const armyData = {
      ...HardcodeArmyRules.get(parsedRoster.faction.name),
      ...(parsedRoster.faction?.rules?.length ? { army_rules: parsedRoster.faction.rules } : {}),
      ...(parsedRoster.detachment?.abilities?.length ? { detachment_rules: parsedRoster.detachment.abilities } : {})
    };
    return { ...parsedRoster, armyData };
  }

  static getRosterName({ _name }) {
    Logger.log('Finding roster name...');
    const name = _name.replaceAll(/(.*?)\(.*?$/g, '$1').trim();
    Logger.logRosterValue(name);
    return name;
  }

  static getBattleSize({ selection }) {
    Logger.log('Finding battle size...');
    const battleSizeSelection = selection.filter((({ _name }) => _name === 'Battle Size'))[0];
    const battleSize = battleSizeSelection?.selections?.selection?._name || '';
    Logger.logRosterValue(battleSize);
    return battleSize;
  }

  static getFaction({ forces, costs }) {
    Logger.log('Finding faction name...');
    const name = forces.force._catalogueName;
    Logger.logRosterValue(name);

    Logger.log('Finding faction points...');
    const points = `${Number(costs.cost._value)}`;
    Logger.logRosterValue(points);

    Logger.log('Finding faction rules...');
    const rules = this.getRules(forces.force.selections.selection).filter(({ _page }) => _page === '1');
    Logger.logArray(rules);
    if (!rules.length) {
      Logger.warn('No faction rules found!');
    }

    return {
      name,
      points,
      rules,
    };
  }

  static getRules(unparsedRules, formatted = false) {
    if (!formatted) {
      unparsedRules = unparsedRules
        .filter(({ rules }) => !!rules)
        .reduce((accumulator, { rules }) => [...accumulator, ...this.getArray(rules.rule)], []);
    }
    return unparsedRules
      .filter((rule, index, array) => array.findIndex(rule2 => (rule2.description === rule.description)) === index)
      .map(({ _name, description, _page }) => ({ name: _name, description, _page }));
  }

  static gatherAllRules(roster) {
    Logger.log('Gathering all rules...');
    const gatherRules = (obj, rules) => {
      for (var property in obj) {
        if (property === 'rules') {
          rules.push(...(this.getArray(obj[property].rule).flat(1)));
        } else if (typeof obj[property] == "object") {
          gatherRules(obj[property], rules);
        }
      }
      return rules;
    };
    const unparsedRules = gatherRules(roster, []);
    const rules = this.getRules(unparsedRules, true);
    if (!rules.length) { Logger.warn('No rules found!'); }
    return rules;
  }

  static getUnits({ force }) {
    Logger.log('Finding units...');

    const units = force.selections.selection.filter(({ _type }) => _type === 'model' || _type === 'unit').map(unit => this.getUnit(unit));

    if (!units.length) {
      Logger.warn('No units found!');
    }
    return units
      .sort((a, b) => {
        const getKeyword = (keywords, index) => {
          if (keywords.includes(this.UNIT_ORDER[index])) return this.UNIT_ORDER[index];
          return index > this.UNIT_ORDER.length ? '' : getKeyword(keywords, index + 1);
        };
        return this.UNIT_ORDER.indexOf(getKeyword(a.keywords[0], 0)) - this.UNIT_ORDER.indexOf(getKeyword(b.keywords[0], 0)) || a.name.localeCompare(b.name);
      });
  }

  static getUnit(unit) {
    return {
      name: unit._name,
      pts: `${this.findInObject(unit, 'pts', [], ['_name']).map(pts => Number(pts._value)).reduce((a, b) => a + b)}`,
      keywords: [unit.categories.category.map(({ _name }) => _name)],
      selections: this.getSelections(unit),
      stats: this.getUnitStats(unit),
      meleeWeapons: this.getWeapons(unit, 'Melee Weapons'),
      rangedWeapons: this.getWeapons(unit, 'Ranged Weapons'),
      abilities: this.getAbilities(unit),
      ruleKeys: unit.rules ? this.getUnitRulekeys(unit.rules.rule) : [],
    };
  }

  static getSelections(unit) {
    //FIXME add recursivness
    const selections = this.getArray(unit.selections?.selection)
      .map((selection) => (selection.selections ? selection.selections.selection : selection))
      .flat(1)
      .filter(this.removeDuplication)
      .map(({ _name, _number }) => _number + "x" + _name)
      .sort((a, b) => a.localeCompare(b));
    return [selections];
  }

  static getStat(characteristic, name) {
    return this.getArray(characteristic).filter(({ _name }) => _name === name).map(({ __text }) => __text)[0] || "";
  };

  static getUnitStats(unit) {
    return this.findInObject(unit, 'Unit', []).map(profile => {
      const characteristic = profile.characteristics.characteristic;
      return {
        name: profile._name,
        M: this.getStat(characteristic, 'M'),
        T: this.getStat(characteristic, 'T'),
        SV: this.getStat(characteristic, 'SV'),
        W: this.getStat(characteristic, 'W'),
        LD: this.getStat(characteristic, 'LD'),
        OC: this.getStat(characteristic, 'OC'),
      };
    });
  }


  static getWeapons(unit, type) {
    return this.findInObject(unit, type, []).map(({ _name, characteristics }) => ({
      name: _name,
      range: this.getStat(characteristics.characteristic, 'Range'),
      attacks: this.getStat(characteristics.characteristic, 'A'),
      skill: this.getStat(characteristics.characteristic, 'BS') || this.getStat(characteristics.characteristic, 'WS'),
      strength: this.getStat(characteristics.characteristic, 'S'),
      armorPenetration: this.getStat(characteristics.characteristic, 'AP'),
      damage: this.getStat(characteristics.characteristic, 'D'),
      keywords: this.getStat(characteristics.characteristic, 'Keywords').split(',').filter(name => name !== '-' && name !== ''),
    })).filter(this.removeDuplication);
  }

  static getArray(maybeArray) {
    if (!maybeArray) return [];
    if (!Array.isArray(maybeArray)) return [maybeArray];
    return maybeArray;
  }

  static getAbilities(unit) {
    const abilities = this.findInObject(unit, 'Abilities', []).map(profile => ({
      name: profile._name,
      description: profile.characteristics.characteristic.__text.replace(/\n/g, '<br>') // TODO Maybe not the best place for it
    })).filter(this.removeDuplication);
    return { abilities, abilityNames: [abilities.map(({ name }) => name)] };
  }

  static getUnitRulekeys(rules) {
    const ruleKeys = this.getArray(rules).map(({ _name }) => _name);
    return [ruleKeys];
  }

  static getDetachment({ selection }) {
    Logger.log('Finding detachment name...');
    const detachmentSelection = selection.filter((({ _name }) => _name.includes('Detachment')))[0];
    const name = detachmentSelection?.selections?.selection?._name || '';
    Logger.logRosterValue(name);
    Logger.log('Finding detachment abilites...');
    const abilities = this.getRules(selection).filter(({ _page }) => _page === '2');
    Logger.logArray(abilities);
    return {
      name,
      abilities
    };
  }

  static findInObject(obj, type, tempArray, keys = ['_type', '_typeName']) {
    Object.keys(obj).forEach((key) => {
      if (keys.includes(key) && obj[key] === type) {
        tempArray.push(obj);
      } else if (Array.isArray(obj[key])) {
        obj[key].forEach(a => {
          this.findInObject(a, type, tempArray, keys);
        });
      } else if (!Array.isArray(obj[key]) && typeof obj[key] === "object") {
        this.findInObject(obj[key], type, tempArray, keys);
      }
    });
    return tempArray.sort((a, b) => a._name.localeCompare(b._name));
  }

  static removeDuplication(obj1, i, a) {
    return a.findIndex(obj2 => (JSON.stringify(obj1) === JSON.stringify(obj2))) === i;
  }
}
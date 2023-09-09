class RoszParser {

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
    const battleSize = battleSizeSelection.selections.selection._name;
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

    return units.sort((a, b) => this.sortBy('name', a, b));
  }

  static getUnit(unit) {
    return {
      name: unit._name,
      pts: `${Number(unit.costs.cost._value)}`,
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
    return [this.getArray(unit.selections?.selection)
      .sort((a, b) => this.sortBy('_name', a, b))
      .map(({ _name, _number }) => _number + "x" + _name)];
  }

  static getStat(characteristic, name) {
    return this.getArray(characteristic).filter(({ _name }) => _name === name).map(({ __text }) => __text)[0] || "";
  };

  static getUnitStats(unit) {
    const parseStats = (profiles, name) => profiles
      .filter(({ _name, _typeName }) => (name.includes(_name) || _name.includes(name)) && ['unit', 'model'].includes(_typeName.toLowerCase()))
      .map(profile => {
        const characteristic = profile.characteristics.characteristic;
        return {
          name,
          M: this.getStat(characteristic, 'M'),
          T: this.getStat(characteristic, 'T'),
          SV: this.getStat(characteristic, 'SV'),
          W: this.getStat(characteristic, 'W'),
          LD: this.getStat(characteristic, 'LD'),
          OC: this.getStat(characteristic, 'OC'),
        };
      });

    let stats = unit?.profiles?.profile ? parseStats(unit.profiles.profile, unit._name) : [];
    if (!stats.length) {
      stats = parseStats(this.getArray(unit?.selections?.selection?.profiles?.profile), unit._name);
    }
    return stats;
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
    })).filter((weapon1, i, a) => a.findIndex(weapon2 => (JSON.stringify(weapon1) === JSON.stringify(weapon2))) === i);
  }

  static getArray(maybeArray) {
    if (!maybeArray) return [];
    if (!Array.isArray(maybeArray)) return [maybeArray];
    return maybeArray;
  }

  static getAbilities(unit) {
    const abilities = this.findInObject(unit, 'Abilities', []).map(profile => ({
      name: profile._name,
      description: profile.characteristics.characteristic.__text
    }));
    return { abilities, abilityNames: [abilities.map(({ name }) => name)] };
  }

  static getUnitRulekeys(rules) {
    const ruleKeys = this.getArray(rules).map(({ _name }) => _name);
    return [ruleKeys];
  }

  static getDetachment({ selection }) {
    Logger.log('Finding detachment name...');
    const detachmentSelection = selection.filter((({ _name }) => _name.includes('Detachment')))[0];
    const name = detachmentSelection.selections.selection._name;
    Logger.logRosterValue(name);
    Logger.log('Finding detachment abilites...');
    const abilities = this.getRules(selection).filter(({ _page }) => _page === '2');
    Logger.logArray(abilities);
    return {
      name,
      abilities
    };
  }

  static findInObject(obj, type, tempArray) {
    Object.keys(obj).forEach((key) => {
      if ((key === '_type' || key === '_typeName') && obj[key] === type) {
        tempArray.push(obj);
      } else if (Array.isArray(obj[key])) {
        obj[key].forEach(a => {
          this.findInObject(a, type, tempArray);
        });
      } else if (!Array.isArray(obj[key]) && typeof obj[key] === "object") {
        this.findInObject(obj[key], type, tempArray);
      }
    });
    return tempArray;
  }

  static sortBy(param, a, b) {
    let fa = a[param].toLowerCase();
    let fb = b[param].toLowerCase();
    if (fa < fb) return -1;
    if (fa > fb) return 1;
    return 0;
  }
}
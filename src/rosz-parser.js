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
    return {
      name: this.getRosterName(roster),
      battleSize: this.getBattleSize(roster.forces.force.selections),
      faction: this.getFaction(roster),
      rules: this.getOtherRules(roster.forces.force.selections),
      detachment: this.getDetachment(roster.forces.force.selections),
      units: this.getUnits(roster.forces),
    };
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

  static getRules(selection) {
    return selection
      .filter(({ rules }) => !!rules)
      .reduce((accumulator, { rules }) => [...accumulator, ...(Array.isArray(rules.rule) ? rules.rule : [rules.rule])], [])
      .filter((rule, index, array) => array.findIndex(rule2 => (rule2.description === rule.description)) === index)
      .map(({ _name, description, _page }) => ({ name: _name, description, _page }));
  }

  static getOtherRules({ selection }) {
    Logger.log('Finding other rules...');
    const rules = this.getRules(selection);
    if (!rules.length) {
      Logger.warn('No other rules found!');
    }

    return rules;
  }

  static getUnits({ force }) {
    Logger.log('Finding units...');

    const units = force.selections.selection.filter(({ _type }) => _type === 'model' || _type === 'unit').map(unit => this.getUnit(unit));

    if (!units.length) {
      Logger.warn('No units found!');
    }

    return units;
  }

  static getUnit(unit) {
    console.log(unit._name, unit);
    return {
      name: unit._name,
      pts: `${Number(unit.costs.cost._value)}`,
      keywords: [unit.categories.category.map(({ _name }) => _name)],
      selectionsFull: unit.selections?.selection,
      selections: unit.selections ? [this.getArray(unit.selections?.selection).map(({ _name }) => _name)] : [],
      stats: this.getUnitStats(unit._name, unit.profiles.profile),
      meleeWeapons: this.getWeapons(unit.selections ? unit.selections.selection : unit.profiles.profile, 'Melee Weapons'),
      rangedWeapons: this.getWeapons(unit.selections ? unit.selections.selection : unit.profiles.profile, 'Ranged Weapons'),
      abilities: this.getAbilities(unit.profiles.profile),
      ruleKeys: unit.rules ? this.getUnitRulekeys(unit.rules.rule) : [],
    };
  }

  static getStat(characteristic, name) {
    if (!Array.isArray(characteristic)) characteristic = [characteristic];
    return characteristic.filter(({ _name }) => _name === name).map(({ __text }) => __text)[0] || "";
  };

  static getUnitStats(name, profiles) {
    const stats = profiles
      .filter(({ _name, _typeName }) => _name === name && ['unit', 'model'].includes(_typeName.toLowerCase()))
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
    return stats;
  }

  //TODO: this is fucked up
  static getWeaponsProfile(selections, type) {
    return this.getArray(selections)
      .filter(selection => {
        if (!selection.profiles || !selection.profiles.profile) return false;
        return this.getArray(selection.profiles.profile).filter(profile => profile._typeName === type).length > 0;
      })
      .map(selection => {
        return this.getArray(selection.profiles.profile).map(profile => {
          const characteristic = profile.characteristics.characteristic;
          return {
            name: profile._name,
            range: this.getStat(characteristic, 'Range'),
            attacks: this.getStat(characteristic, 'A'),
            skill: this.getStat(characteristic, 'BS') || this.getStat(characteristic, 'WS'),
            strength: this.getStat(characteristic, 'S'),
            armorPenetration: this.getStat(characteristic, 'AP'),
            damage: this.getStat(characteristic, 'D'),
            keywords: this.getStat(characteristic, 'Keywords').split(','),
          };
        });
      });
  }

  static getWeapons(selections, type) {
    // If weapons comes
    let weapons = this.getWeaponsProfile(selections, type) || [];

    // If models comes
    if (!weapons.length) {
      const models = this.getArray(selections);
      models.filter(({ _type }) => ['unit', 'model'].includes(_type)).forEach((model) => {
        const weaponProfileObj = model.selections ? model.selections.selection : model;
        const weaponProfile = this.getWeaponsProfile(weaponProfileObj, type);
        weapons.push(weaponProfile);
      });
    }

    //remove flatten arrays
    weapons = Array.isArray(weapons[0]) ? weapons.flat(2) : weapons;

    //remove completely duplicated profiles 
    weapons = weapons.filter((profile1, i, a) => a.findIndex(profile2 => (JSON.stringify(profile1) === JSON.stringify(profile2))) === i);
    return weapons;
  }

  static getArray(maybeArray) {
    if (!Array.isArray(maybeArray)) return [maybeArray];
    return maybeArray;
  }

  static getAbilities(profiles) {
    const abilities = profiles.filter(({ _typeName }) => _typeName === 'Abilities').map(profile => {
      const characteristic = profile.characteristics.characteristic;
      return {
        name: profile._name,
        description: characteristic.__text
      };
    });
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
}
class Sanitizer {
  static sanitize(roster) {
    Logger.log('Sanitizing data...');
    roster = this.removeDuplicateUnits(roster);
    roster = this.addTooltips(roster, roster.rules);
    roster = this.flattenSelections(roster);
    roster = this.addSidebarSelections(roster);

    /**
     * 
     * - Better styles for toolips
     * - Fix missing space between commas in abilities and keywords
     *  Where to get stratagems?
     * - Fix Stats for multiple stat units (e.g. zoanthropes)
     * - Fix movement stat showing : instead of "
     * - Fix CORE abilities, show faction abilities (different values in real datasheet compared to here)
     * - Add extra graphics elements
     * 
     *  Super later on:
     * - check small mobile portait mode
     * 
     */

    Logger.log('Finished sanitizing data.');

    return roster;
  }

  static addSidebarSelections(roster) {
    return {
      ...roster,
      units: roster.units.map((unit, index) => {
        const duplicateUnit = roster.units.find((compareUnit, compareIndex) => compareUnit.name === unit.name && compareIndex !== index);

        return {
          ...unit,
          sidebarSelections: unit.selections.filter(() => !!duplicateUnit).filter((selection) => !duplicateUnit.selections.find((duplicateSelection) => this.isDeepEqual(duplicateSelection, selection))),
        };
      }),
    };
  }

  static flattenSelections(roster) {
    return {
      ...roster,
      units: roster.units.map((unit) => ({
        ...unit,
        selections:
          unit.selections.reduce((newSelections, selections) => {
            selections.forEach((selection) => {
              const duplicateSelection = newSelections.find((newSelection) => selection.includes(newSelection.name) || newSelection.name.includes(selection));
              const regex = /^(?:(\d+)x)? ?(.*)$/;
              const matches = regex.exec(selection);
              const count = parseInt(matches[1]) || 1;
              const name = matches[2];

              if (duplicateSelection) {
                duplicateSelection.count += count;
              } else {
                newSelections.push({
                  name,
                  count,
                });
              }
            });

            return newSelections;
          }, []),
      })),
    };
  }

  static addTooltips(roster, rules) {
    const addNestedTooltips = (strings) => strings.map((string) => addTooltips(string));
    const addTooltips = (strings) => strings.map((string) => addTooltip(string));

    const addTooltip = (string) => {
      rules.forEach((rule) => {
        if (string.includes(rule.name)) {
          string = string.replace(rule.name, Builder.getTooltip(rule.name, rule.description));
        }
      });

      return string;
    };

    return ({
      ...roster,
      units: roster.units.map((unit) => ({
        ...unit,
        abilities: {
          ...unit.abilities,
          abilityNames: addNestedTooltips(unit.abilities.abilityNames),
          abilities: unit.abilities.abilities.map((ability) => ({
            ...ability,
            name: addTooltip(ability.name),
          })),
        },
        keywords: addNestedTooltips(unit.keywords),
        meleeWeapons: unit.meleeWeapons.map((weapon) => ({
          ...weapon,
          keywords: addTooltips(weapon.keywords),
        })),
        rangedWeapons: unit.rangedWeapons.map((weapon) => ({
          ...weapon,
          keywords: addTooltips(weapon.keywords),
        })),
        ruleKeys: addNestedTooltips(unit.ruleKeys),
      })),
    });
  }

  static removeDuplicateUnits(roster) {
    return {
      ...roster,
      units: this.removeDuplicateFromArray(roster.units),
    };
  }

  static removeDuplicateFromArray(array) {
    return array.filter((element, index) => array.indexOf(array.find((compareElement) => this.isDeepEqual(compareElement, element))) === index);
  }

  static isDeepEqual(object1, object2) {

    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) return false;

    for (var key of objKeys1) {
      const value1 = object1[key];
      const value2 = object2[key];

      const isObjects = this.isObject(value1) && this.isObject(value2);

      if ((isObjects && !this.isDeepEqual(value1, value2)) ||
        (!isObjects && value1 !== value2)
      ) {
        return false;
      }
    }
    return true;
  };

  static isObject(object) {
    return object != null && typeof object === "object";
  };
}
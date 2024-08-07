class Sanitizer {
  static sanitize(roster) {
    Logger.log('Sanitizing data...');
    roster = this.removeLinks(roster);
    roster = this.removeSpans(roster);
    roster = this.removeInlineStyles(roster);
    roster = this.cleanUpText(roster);
    roster = this.removeDuplicateUnits(roster);
    roster = this.removeDuplicateStatlines(roster);
    roster = this.removeExtraAbilities(roster);
    roster = this.addTooltips(roster, roster.rules);
    roster = this.flattenSelections(roster);
    roster = this.addSidebarSelections(roster);

    // Specific to "Nurgles Gift" Ability, Wahapedia uses images for this, so we need to replace them with text.
    roster = this.fixContagionRange(roster);

    /**
     * 
     * - Better styles for toolips
     * - Fix missing space between commas in abilities and keywords
     * - check small mobile portait mode
     * 
     */

    Logger.log('Finished sanitizing data.');

    return roster;
  }

  static removeDuplicateStatlines(roster) {
    const isDuplicateStat = (stats, compareStats) => Object.keys(stats).every((key) => {
      if (key === 'name') {
        return true;
      } else {
        return compareStats[key] === stats[key];
      }
    });

    return {
      ...roster,
      units: roster.units.map((unit) => ({
        ...unit,
        stats: unit.stats.reduce((newStats, current) => {
          const duplicateStat = newStats.find((stats) => isDuplicateStat(stats, current));

          if (duplicateStat) {
            duplicateStat.name += `, ${current.name}`;
          } else {
            newStats.push(current);
          }

          return newStats;
        }, []),
      })),
    };
  }

  static removeLinks(roster) {
    return this.mutateEachStringInObject(roster, (string) => {
      return string
        .replace(/<a[^>]*?>(.*?)<\/a>/g, '$1');
    });
  }

  static removeSpans(roster) {
    return this.mutateEachStringInObject(roster, (string) => {
      return string
        .replace(/<span[^>]*?>([^<]*?)<\/span>/g, '$1')
        .replace(/<span[^>]*?>([^<]*?)<\/span>/g, '$1')
        .replace(/<span[^>]*?>([^<]*?)<\/span>/g, '$1')
        .replace(/<span[^>]*?>([^<]*?)<\/span>/g, '$1');
    });
  }

  static removeInlineStyles(roster) {
    return this.mutateEachStringInObject(roster, (string) => {
      return string
        .replace(/style="[^"]*?"/g, '');
    });
  }

  static removeExtraAbilities(roster) {
    const factionKeywords = roster.units.reduce((acc, unit) => {
      const factionKeywordRegex = /Faction: (a-zA-Z0-9\s)*/g;
      const factionKeyword = unit?.keywords?.[0]?.filter((keyword) => factionKeywordRegex.test(keyword))?.map((keyword) => keyword.replace(factionKeywordRegex, '$1')) || '';
      
      if (factionKeyword && acc[factionKeyword]) {
        acc[factionKeyword]++;
      } else if (factionKeyword) {
        acc[factionKeyword] = 1;
      }

      return acc;
    }, {});

    const factionKeyword = Object.keys(factionKeywords).reduce((highestKeyword, keyword) => factionKeywords[highestKeyword] > factionKeywords[keyword] ? highestKeyword : keyword)?.toLowerCase() || '';

    return {
      ...roster,
      armyData: {
        ...roster.armyData,
        factionAbilities: roster.armyData.factionAbilities.filter((ability) => ability.description.includes(factionKeyword)),
      },
    };
  }

  static fixContagionRange(roster) {
    const fixedAbilities = roster.armyData.factionAbilities.map((ability) => {
      const getContagionRangeRegex = (number) => RegExp(`<img [a-zA-Z0-9"=\\s]*?src="\/wh40k10ed\/img\/ContagionRange${number}\.png"\\s*>`, 'g');

      for (let i = 1; i <= 3; i++) {
        ability.description = ability.description.replace(getContagionRangeRegex(i), `<b>${i === 1 ? '1st' : i === 2 ? '2nd' : '3rd'} Battle Round:</b> Contagion Range ${i * 3}"`);
      }
      
      return ability;
    });

    return {
      ...roster,
      armyData: {
        ...roster.armyData,
        factionAbilities: fixedAbilities,
      },
    };
  }

  static cleanUpText(roster) {
    return this.mutateEachStringInObject(roster, (string) => {
      return string
        .replace(/(\w)- *?(\w)/g, '$1-$2') // Remove extra spaces with inline dashes (a- b -> a-b)
        .replace(/  */g, ' ') // Remove double (or more) spaces
        .replace(/'/g, "") // Remove ' in name  TODO
        .replace(/ +\n */g, '\n') // Remove extra spaces around line separators
        .replace(/ +, */g, ', ') // Remove spaces before and after commas, leave only 1 after
        .replace(/([A-Z|\s]{5,})/g, (match) => `<b class="capitalize">${match.toLowerCase()}</b>`)
        // Replace uppercase words with bold capitalized versions
        .replace(/^(\d):$/g, '$1"') // replace mistake in movement data where : was placed instead of "
        .replace(/(<br>){3,}/g, '<br><br>') // replace 3 or more <br> with 2 <br>. <br><br> still possible.
        .trim();
    });
  }

  static addSidebarSelections(roster) {
    return {
      ...roster,
      units: roster.units.map((unit, index) => {
        const duplicateUnit = roster.units.find((compareUnit, compareIndex) => compareUnit.name === unit.name && compareIndex !== index);

        return {
          ...unit,
          sidebarSelections: unit.flatSelections.filter(() => !!duplicateUnit).filter((selection) => !duplicateUnit.flatSelections.find((duplicateSelection) => this.isDeepEqual(duplicateSelection, selection))),
        };
      }),
    };
  }

  static flattenSelections(roster) {
    return {
      ...roster,
      units: roster.units.map((unit) => ({
        ...unit,
        flatSelections:
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
    const addTooltips = (strings) => strings?.map((string) => addTooltip(string));


    const addTooltip = (string) => {
      rules.forEach((rule) => {
        if (string.includes(rule.name)) {
          string = string.replace(rule.name, Builder.getTooltip(rule.name, rule.description));
        } else if (string.includes(rule.name.toLowerCase())) {
          string = string.replace(rule.name.toLowerCase(), Builder.getTooltip(rule.name.toLowerCase(), rule.description));
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
            description: addTooltip(ability.description),
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
      armyData: {
        ...roster.armyData,
        factionAbilities: roster.armyData.factionAbilities.map((ability) => ({
          ...ability,
          description: addTooltip(ability.description),
        })),
        detachmentAbilities: roster.armyData.detachmentAbilities.map((ability) => ({
          ...ability,
          description: addTooltip(ability.description),
        })),
        detachmentStrats: roster.armyData.detachmentStrats.map((ability) => ({
          ...ability,
          description: addTooltip(ability.description),
        })),
        coreStrats: roster.armyData.coreStrats.map((ability) => ({
          ...ability,
          description: addTooltip(ability.description),
        })),
      },
    });
  }

  static removeDuplicateUnits(roster) {
    return {
      ...roster,
      units: this.removeDuplicateFromArray(roster.units),
      armyComposition: roster.units.map((unit) => ({
        name: unit.name,
        count: 1,
        points: unit.pts,
      })).reduce((units, unit) => {
        const findMatchingUnit = (u) => u.name === unit.name && u.points === unit.points;
        if (units.some(findMatchingUnit)) {
          units.find(findMatchingUnit).count++;
        } else {
          units.push(unit);
        }

        return units;
      }, []),
    };
  }

  static removeDuplicateFromArray(array) {
    return array.filter((element, index) => array.indexOf(array.find((compareElement) => this.isDeepEqual(compareElement, element))) === index);
  }

  static mutateEachStringInObject(object, callback) {
    Object.keys(object).forEach((key) => {
      if (this.isObject(object[key])) {
        return this.mutateEachStringInObject(object[key], callback);
      } else if (typeof object[key] === 'string') {
        object[key] = callback(object[key]) || '';
      }
    });

    return object;
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
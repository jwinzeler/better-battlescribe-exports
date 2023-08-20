class Sanitizer {
  static sanitize(roster) {
    Logger.log('Sanitizing data...');
    roster = Sanitizer.removeDuplicateUnits(roster);
    roster = Sanitizer.addTooltips(roster, roster.rules);

    /**
     * 
     * 
     * 
     * - Only show important selections
     *  Warlord
     *  If a datasheet is duplicated with different selections (Acidfex + rupturefex)
     * - Better styles for toolips
     * - Fix missing space between commas in abilities and keywords
     * - Build overview page
     *  Where to get stratagems?
     * - Fix Stats for multiple stat units (e.g. zoanthropes)
     * - Fix movement stat showing : instead of "
     * - Fix CORE abilities, show faction abilities (different values in real datasheet compared to here)
     * - Add extra graphics elements
     * - Add mobile styles :D
     * 
     */

    Logger.log('Finished sanitizing data.');

    return roster;
  }

  static addTooltips(object, rules) {
    const objKeys = Object.keys(object);

    objKeys.forEach((key) => {
      if (Sanitizer.isObject(object[key])) {
        object[key] = Sanitizer.addTooltips(object[key], rules);
      } else {
        rules.forEach((rule) => {
          if (object[key].includes(rule.name)) {
            console.log(`adeded ${rule.name} in`, object);
            object[key] = object[key].replace(rule.name, Builder.getTooltip(rule.name, rule.description));
          }
        });
      }
    });

    return object;
  }

  static removeDuplicateUnits(roster) {
    return {
      ...roster,
      units: Sanitizer.removeDuplicateFromArray(roster.units),
    };
  }

  static removeDuplicateFromArray(array) {
    return array.filter((element, index) => array.indexOf(array.find((compareElement) => Sanitizer.isDeepEqual(compareElement, element))) === index);
  }

  static isDeepEqual(object1, object2) {

    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
  
    if (objKeys1.length !== objKeys2.length) return false;
  
    for (var key of objKeys1) {
      const value1 = object1[key];
      const value2 = object2[key];
  
      const isObjects = Sanitizer.isObject(value1) && Sanitizer.isObject(value2);
  
      if ((isObjects && !Sanitizer.isDeepEqual(value1, value2)) ||
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
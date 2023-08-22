class Interpreter {
  static read(file) {
    Logger.log(`Reading file...`);
    const contents = document.createElement('div');
    contents.innerHTML = file;

    return {
      name: Interpreter.getRosterName(contents),
      battleSize: Interpreter.getBattleSize(contents),
      faction: Interpreter.getFaction(contents),
      detachment: Interpreter.getDetachment(contents, Interpreter.getRules(contents)),
      units: Interpreter.getUnits(contents),
      rules: Interpreter.getRules(contents),
    };
  }

  static getRosterName(html) {
    Logger.log('Finding roster name...');
    const nameElement = html.querySelector('h1');
    let name = Interpreter.getStringFromHtml(nameElement);
    name = name.replaceAll(/(.*?)\(.*?$/g, '$1').trim();
    Logger.logRosterValue(name);

    return name;
  }

  static getRules(html) {
    Logger.log('Finding other rules...');

    const rules = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'div.summary',
      'h2',
      'Selection Rules',
      (summaryElement) => summaryElement.querySelectorAll('p').forEach((ruleHtml) => {
        const rawRule = Interpreter.getStringFromHtml(ruleHtml);
        const regex = /<span.*?>(.*?):<\/span>((.|\n)*)$/gm;
        const name = rawRule.replaceAll(regex, '$1').trim() || '';
        const description = rawRule.replaceAll(regex, '$2').replaceAll('()', '').trim() || '';

        rules.push({
          name,
          description,
        });

        Logger.logRosterValue(`${name}: ${description}`);
      }),
    );

    if (!rules.length) {
      Logger.warn('No faction rules found!');
    }

    return rules;
  }

  static getUnits(html) {
    Logger.log('Finding units...');

    let units = [];

    Interpreter.forEachElementNotContainingText(
      html,
      'li.force > ul > li.category',
      'h3',
      'Configuration',
      (categoryElement) => {
        const unitElements = categoryElement.querySelectorAll('ul > li.rootselection');
        unitElements.forEach((unitElement) => {
          const unit = Interpreter.getUnit(unitElement);
          units.push(unit);
        });
      }
    );

    if (!units.length) {
      Logger.warn('No units found!');
    }

    return units;
  }

  static getUnit(html) {
    return {
      name: Interpreter.getUnitName(html),
      pts: Interpreter.getUnitPoints(html),
      selections: Interpreter.getUnitSelections(html),
      keywords: Interpreter.getUnitKeywords(html),
      ruleKeys: Interpreter.getUnitRulekeys(html),
      abilities: Interpreter.getUnitAbilities(html),
      meleeWeapons: Interpreter.getUnitWeapons(html, 'Melee Weapons'),
      rangedWeapons: Interpreter.getUnitWeapons(html, 'Ranged Weapons'),
      stats: Interpreter.getUnitStats(html),
    };
  }

  static getUnitStats(html) {
    const stats = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'table',
      'th',
      'Unit',
      (weaponsElement) => {
        const tableRows = weaponsElement.querySelectorAll('tr');
        tableRows.forEach((tableRow) => {
          const rowText = Interpreter.getStringFromHtml(tableRow);
          if (rowText.includes('<th>')) {
            return;
          }

          const name = rowText.replaceAll(/<td.+?>(.*?)<\/td>(.|\n)*/g, '$1').trim() || '';
          let matches = rowText.match(/(.|\n)*?<td.*?>((.|\n)*?)<\/td>/g);
          matches = matches.map((match) => match.replace(/<\/?td.*?>/g, '').trim());
          const M = matches[1] || '';
          const T = matches[2] || '';
          const SV = matches[3] || '';
          const W = matches[4] || '';
          const LD = matches[5] || '';
          const OC = matches[6] || '';

          stats.push({
            name,
            M,
            T,
            SV,
            W,
            LD,
            OC,
          });
        });
      },
    );

    return stats;
  }

  static getUnitWeapons(html, type) {
    const weapons = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'table',
      'th',
      type,
      (weaponsElement) => {
        const tableRows = weaponsElement.querySelectorAll('tr');
        tableRows.forEach((tableRow) => {
          const rowText = Interpreter.getStringFromHtml(tableRow);
          if (rowText.includes('<th>')) {
            return;
          }

          const name = rowText.replaceAll(/<td.+?>(.*?)<\/td>(.|\n)*/g, '$1').trim() || '';
          let matches = rowText.match(/(.|\n)*?<td.*?>((.|\n)*?)<\/td>/g);
          matches = matches.map((match) => match.replace(/<\/?td.*?>/g, '').trim());
          const range = matches[1] || '';
          const attacks = matches[2] || '';
          const skill = matches[3] || '';
          const strength = matches[4] || '';
          const armorPenetration = matches[5] || '';
          const damage = matches[6] || '';
          const keywords = matches[7].replace('-', '').split(',').filter((keyword) => !!keyword) || '';

          weapons.push({
            name,
            range,
            attacks,
            skill,
            strength,
            armorPenetration,
            damage,
            keywords,
          });
        });
      },
    );

    return weapons;
  }

  static getUnitAbilities(html) {
    const abilityNames = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'p',
      'span',
      'Abilities',
      (abilitiesElement) => {
        let ability = Interpreter.getArrayFromHtml(abilitiesElement);
        ability[0] = ability[0].replaceAll(/<span.*?>(.*?)<\/span>(.*?)$/g, '$2').trim();
        ability = ability.map((category) => category.replaceAll(/<\/?span.*?>/g, '').trim());
        abilityNames.push(ability);
      },
    );

    const abilities = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'table',
      'th',
      'Abilities',
      (abilitiesElement) => {
        const tableRows = abilitiesElement.querySelectorAll('tr');
        tableRows.forEach((tableRow) => {
          const rowText = Interpreter.getStringFromHtml(tableRow);
          if (rowText.includes('<th>')) {
            return;
          }

          const name = rowText.replaceAll(/<td.+?>(.*?)<\/td>(.|\n)*/g, '$1').trim() || '';
          const description = rowText.replaceAll(/(.|\n)*?<td>((.|\n)*?)<\/td>(.|\n)*$/gm, '$2').trim() || '';

          abilities.push({
            name,
            description,
          });
        });
      },
    );

    return {
      abilityNames,
      abilities,
    };
  }

  static getUnitRulekeys(html) {
    const ruleKeys = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'p',
      'span',
      'Rules',
      (rulesElement) => {
        let ruleKey = Interpreter.getArrayFromHtml(rulesElement);
        ruleKey[0] = ruleKey[0].replaceAll(/<span.*?>(.*?)<\/span>(.*?)$/g, '$2').trim();
        ruleKey = ruleKey.map((category) => category.replaceAll(/<\/?span.*?>/g, '').trim());
        ruleKeys.push(ruleKey);
      },
    );

    return ruleKeys;
  }

  static getUnitKeywords(html) {
    const keywords = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'p',
      'span',
      'Categories',
      (categoriesElement) => {
        let keyword = Interpreter.getArrayFromHtml(categoriesElement);
        keyword[0] = keyword[0].replaceAll(/<span.*?>(.*?)<\/span>(.*?)$/g, '$2').trim();
        keyword = keyword.map((category) => category.replaceAll(/<\/?span.*?>/g, '').trim());
        keywords.push(keyword);
      },
    );

    return keywords;
  }

  static getUnitSelections(html) {
    const selections = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'p', // Finds selections of "sub units" as well!
      'span',
      'Selections',
      (selectionsElement) => {
        let selection = Interpreter.getArrayFromHtml(selectionsElement);
        selection[0] = selection[0].replaceAll(/<span.*?>(.*?)<\/span>(.*?)$/g, '$2').trim();
        selections.push(selection);
      },
    );

    return selections;
  }

  static getUnitPoints(html) {
    const pointsElement = html.querySelector('h4');
    let points = Interpreter.getStringFromHtml(pointsElement);
    points = points.replaceAll(/.*\[(.*?)\]/g, '$1').trim();

    return points;
  }

  static getUnitName(html) {
    const nameElement = html.querySelector('h4');
    let name = Interpreter.getStringFromHtml(nameElement);
    name = name.replaceAll(/\[.*?\]/g, '').trim();
    Logger.logRosterValue(name);

    return name;
  }

  static getDetachment(html, rules) {
    let name = '';
    let abilities = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'li.force > ul > li.category > ul > li.rootselection',
      'h4',
      'Detachment',
      (summaryElement) => {
        console.log(summaryElement);
        name = Interpreter.getDetachmentName(summaryElement);
        abilities = Interpreter.getDetachmentAbilities(summaryElement, rules);
      },
    );

    return {
      name,
      abilities
    };
  }

  static getDetachmentName(html) {
    Logger.log('Finding detachment name...');
    const nameElement = html.querySelector('p');
    let name = Interpreter.getStringFromHtml(nameElement);
    name = name.replaceAll(/<span.*?<\/span>/g, '');

    if (!name) {
      Logger.warn('Detachment name not found!');
    } else {
      Logger.logRosterValue(name);
    }

    return name;
  }

  static getDetachmentAbilities(html) {
    Logger.log('Finding detachment abilites...');
    const abilities = [];

    const tableRows = html.querySelectorAll('tr');
    tableRows.forEach((tableRow) => {
      const rowText = Interpreter.getStringFromHtml(tableRow);
      if (rowText.includes('<th>')) {
        return;
      }

      const name = rowText.replaceAll(/<td.+?>(.*?)<\/td>(.|\n)*/g, '$1').trim() || '';
      const description = rowText.replaceAll(/(.|\n)*?<td>((.|\n)*?)<\/td>(.|\n)*$/gm, '$2').trim() || '';

      abilities.push({
        name,
        description,
      });

      Logger.logRosterValue(`${name}: ${description}`);
    });

    if (!abilities.length) {
      Logger.warn('No detachment abilities found!');
    }

    return abilities;
  }

  static getFaction(html) {
    return {
      name: Interpreter.getFactioName(html),
      points: Interpreter.getFactionPoints(html),
      rules: Interpreter.getFactionRules(html),
    };
  }

  static getFactioName(html) {
    Logger.log('Finding faction name...');
    const factionElement = html.querySelector('li.force > h2');
    const faction = Interpreter.getStringFromHtml(factionElement);
    const name = faction.replaceAll(/^.*?\(([^\)]*?)\).*?$/g, '$1').trim();
    Logger.logRosterValue(name);

    return name;
  }

  static getFactionPoints(html) {
    Logger.log('Finding faction points...');
    const factionElement = html.querySelector('li.force > h2');
    const faction = Interpreter.getStringFromHtml(factionElement);
    const points = faction.replaceAll(
      /^.*?\[([^\)]*?)\].*?$/g,
      '$1'.replaceAll(',', '').replaceAll('pts', '')
    );
    Logger.logRosterValue(points);

    return points;
  }

  static getFactionRules(html) {
    Logger.log('Finding faction rules...');

    const rules = [];

    Interpreter.ifElementContainsElementMatchingText(
      html,
      'div.summary',
      'h2',
      'Force Rules',
      (summaryElement) => summaryElement.querySelectorAll('p').forEach((ruleHtml) => {
        const rawRule = Interpreter.getStringFromHtml(ruleHtml);
        const regex = /<span.*?>(.*?):<\/span>((.|\n)*)$/gm;
        const name = rawRule.replaceAll(regex, '$1').trim() || '';
        const description = rawRule.replaceAll(regex, '$2').replaceAll('()', '').trim() || '';

        rules.push({
          name,
          description,
        });

        Logger.logRosterValue(`${name}: ${description}`);
      }),
    );

    if (!rules.length) {
      Logger.warn('No faction rules found!');
    }

    return rules;
  }

  static getBattleSize(html) {
    Logger.log('Finding battle size...');
    const battleSizeElement = html.querySelector('li.force > ul > li.category p');
    let battleSize = Interpreter.getStringFromHtml(battleSizeElement);
    battleSize = battleSize.replaceAll(/<span.*?<\/span>/g, '');

    Logger.logRosterValue(battleSize);

    return battleSize;
  }

  static forEachElementNotContainingText(
    html,
    parentSelector,
    childSelector,
    matchingText,
    callBack,
  ) {
    const summaryElements = html.querySelectorAll(parentSelector);
    summaryElements.forEach((summaryElement) => {
      const text = summaryElement.querySelector(childSelector);

      if (!Interpreter.getStringFromHtml(text).includes(matchingText)) {
        callBack(summaryElement);
      }
    });
  }

  static ifElementContainsElementMatchingText(
    html,
    parentSelector,
    childSelector,
    matchingText,
    callBack,
  ) {
    const summaryElements = html.querySelectorAll(parentSelector);
    summaryElements.forEach((summaryElement) => {
      const text = summaryElement.querySelector(childSelector);

      if (Interpreter.getStringFromHtml(text).includes(matchingText)) {
        callBack(summaryElement);
      }
    });
  }

  static getStringFromHtml(htmlElement) {
    if (Interpreter.elementExists(htmlElement)) {
      return htmlElement.innerHTML.trim();
    } else {
      return '';
    }
  }

  static getArrayFromHtml(htmlElement, separator = ',') {
    if (Interpreter.elementExists(htmlElement)) {
      return htmlElement.innerHTML.trim().split(separator);
    } else {
      return [];
    }
  }

  static elementExists(htmlElement) {
    if (htmlElement) {
      return true;
    } else {
      Logger.warn('Attempted to parse value from nullish element!');
    }
  }
}
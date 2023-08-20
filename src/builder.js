class Builder {
  static getOutput(roster) {
    Logger.log('Building .html file...');
    const html = Builder.createElementWithAttributes('html');

    const head = Builder.getHead(roster);
    html.appendChild(head);

    const body = Builder.getBody(roster);
    html.appendChild(body);

    Logger.log('Finished .html file.');

    return html;
  }

  static getBody(roster) {
    const body = Builder.createElementWithAttributes('body');

    const aside = Builder.getAside(roster);
    body.appendChild(aside);

    const main = Builder.getMain(roster);
    body.appendChild(main);

    return body;
  }

  static getMain(roster) {
    const main = Builder.createElementWithAttributes('main');

    /*const overview = Builder.getOverviewPage(roster);
    main.appendChild(overview);*/

    roster.units.forEach((unit) => {
      const page = Builder.getUnitPage(unit);
      main.appendChild(page);
    });

    return main;
  }

  static getUnitPage(unit) {
    const id = Builder.stringToId(unit.name);
    const page = Builder.createElementWithAttributes('div', [
      { attribute: 'id', value: `${id}-page` },
      { attribute: 'class', value: 'page' },
    ]);
    const datasheet = Builder.getDatasheet(unit);
    page.appendChild(datasheet);

    return page;
  }

  static getDatasheet(unit) {
    const datasheet = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'datasheet' },
    ]);

    const header = Builder.getDatasheetHeader(unit);
    datasheet.appendChild(header);

    const body = Builder.getDatasheetBody(unit);
    datasheet.appendChild(body);

    return datasheet;
  }

  static getDatasheetBody(unit) {
    const body = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'datasheet-body' },
    ]);

    const columnLeft = Builder.getLeftColumn(unit);
    body.appendChild(columnLeft);

    const columnRight = Builder.getRightColumn(unit);
    body.appendChild(columnRight);

    const columnBottom = Builder.getBottomColumn(unit);
    body.appendChild(columnBottom);

    return body;
  }

  static getBottomColumn(unit) {
    const columnBottom = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'column-bottom' },
    ]);

    const columnPadding = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'column-padding' },
    ]);

    const keywordsEl = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'keywords' },
    ]);
    keywordsEl.innerHTML = 'KEYWORDS: ';

    const keywords = Builder.createBoldSpan(unit.keywords.join(', '));
    keywordsEl.appendChild(keywords);

    columnPadding.appendChild(keywordsEl);

    columnBottom.appendChild(columnPadding);

    return columnBottom;
  }

  static getRightColumn(unit) {
    const columnRight = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'column-right' },
    ]);

    const columnPadding = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'column-padding' },
    ]);

    const invulnFound = unit.abilities.abilities.find((ability) => ability.name === "Invulnerable Save")
    if (invulnFound) {
      const invulnTable = Builder.createTable([
        [invulnFound.name, `<div>${invulnFound.description.replace(/.*?([\d]+\+).*?$/g, '$1')}</div>`],
      ]);
      invulnTable.querySelector('th:nth-child(2)').setAttribute('class', 'invuln');
      columnPadding.appendChild(invulnTable);
    }

    const tableData = [
      ['ABILITIES'],
    ];
    
    if (unit.ruleKeys) {
      tableData.push([`CORE: <span class="bold">${unit.ruleKeys.join(', ')}</span>`]);
    }

    if (unit.abilities.abilities) {
      tableData.push(
        ...unit.abilities.abilities
          .filter((ability) => ability.name !== "Invulnerable Save")
          .map((ability) => ([
            `<span class="bold">${ability.name}: </span>${ability.description}`,
          ]),
        ),
      );
    }

    const unitTable = Builder.createTable(tableData);
    columnPadding.appendChild(unitTable);

    columnRight.appendChild(columnPadding);

    return columnRight;
  }

  static getLeftColumn(unit) {
    const columnLeft = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'column-left' },
    ]);

    const columnPadding = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'column-padding' },
    ]);

    if (unit.rangedWeapons.length) {
      const rangedTable = Builder.createTable([
        ['', 'RANGED WEAPONS', 'RANGE', 'A', 'BS', 'S', 'AP', 'D'],
        ...unit.rangedWeapons.map((weapon) => ([
          '',
          `${weapon.name}${weapon.keywords.length ? `<br /><span class="bold small">[${weapon.keywords.join(', ')}]` : ''}</span>`,
          weapon.range,
          weapon.attacks,
          weapon.skill,
          weapon.strength,
          weapon.armorPenetration,
          weapon.damage,
        ])),
      ]);
      columnPadding.appendChild(rangedTable);
    }

    if (unit.meleeWeapons.length) {
      const meleeTable = Builder.createTable([
        ['', 'MELEE WEAPONS', 'RANGE', 'A', 'WS', 'S', 'AP', 'D'],
        ...unit.meleeWeapons.map((weapon) => ([
          '',
          `${weapon.name}${weapon.keywords.length ? `<br /><span class="bold small">[${weapon.keywords.join(', ')}]` : ''}</span>`,
          weapon.range,
          weapon.attacks,
          weapon.skill,
          weapon.strength,
          weapon.armorPenetration,
          weapon.damage,
        ])),
      ]);
      columnPadding.appendChild(meleeTable);
    }

    columnLeft.appendChild(columnPadding);

    return columnLeft;
  }

  static createTable(data) {
    const table = Builder.createElementWithAttributes('table');

    data.forEach((row, index) => {
      const rowEl = Builder.createElementWithAttributes('tr');

      row.forEach((column) => {
        const cell = Builder.createElementWithAttributes(index ? 'td' : 'th');
        cell.innerHTML = column;
        rowEl.appendChild(cell);
      });

      table.appendChild(rowEl);
    });

    return table;
  }

  static getDatasheetHeader(unit) {
    const header = Builder.createElementWithAttributes('header');

    const name = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'unit-name' },
    ]);
    name.innerHTML = unit.name;
    header.appendChild(name);

    const statsWrapper = Builder.createElementWithAttributes('div', [
      { attribute: 'class', value: 'stats-wrapper' },
    ]);
    unit.stats.forEach((stats) => {
      Object.keys(stats).forEach((stat) => {
        if (stat === 'name') {
          return;
        }
        
        const statEl = Builder.createElementWithAttributes('div', [
          { attribute: 'class', value: 'stat' },
        ]);
        const statName = Builder.createElementWithAttributes('div', [
          { attribute: 'class', value: 'stat-name' },
        ]);
        statName.innerHTML = stat;
        statEl.appendChild(statName);
        const statValue = Builder.createElementWithAttributes('div', [
          { attribute: 'class', value: 'stat-value' },
        ]);
        statValue.innerHTML = stats[stat];
        statEl.appendChild(statValue);
        statsWrapper.appendChild(statEl);
      });
    });
    header.appendChild(statsWrapper);

    return header;
  }

  static getAside(roster) {
    const aside = Builder.createElementWithAttributes('aside');

    const overview = Builder.getOverviewButton(roster);
    aside.appendChild(overview);

    roster.units.forEach((unit) => {
      const button = Builder.getUnitButton(unit);
      aside.appendChild(button);
    });

    return aside;
  }

  static getUnitButton(unit) {
    const id = Builder.stringToId(unit.name);
    const button = Builder.createElementWithAttributes('button', [
      { attribute: 'onclick', value: `togglePage('${id}-page')` },
      { attribute: 'id', value: `${id}-button`},
    ]);
    button.innerHTML = unit.name;
    
    const info = Builder.createElementWithAttributes('div', [{ attribute: 'class', value: 'overview-info' }]);

    unit.selections.forEach((selection) => {
      const selectionElement = Builder.createElementWithAttributes('div');
      selectionElement.appendChild(Builder.createBoldSpan('Selections: '));
      selectionElement.innerHTML += selection.join(', ');
      info.appendChild(selectionElement);
    });

    button.appendChild(info);

    return button;
  }

  static getOverviewButton(roster) {
    const button = Builder.createElementWithAttributes('button', [
      { attribute: 'onclick', value: "togglePage('overview-page')" },
      { attribute: 'id', value: `overview-button`},
    ]);
    button.innerHTML = roster.name;
    
    const info = Builder.createElementWithAttributes('div', [{ attribute: 'class', value: 'overview-info' }]);

    const faction = Builder.createElementWithAttributes('div');
    faction.appendChild(Builder.createBoldSpan('Faction: '));
    faction.innerHTML += roster.faction.name;
    info.appendChild(faction);
    
    const detachment = Builder.createElementWithAttributes('div');
    detachment.appendChild(Builder.createBoldSpan('Detachment: '));
    detachment.innerHTML += roster.detachment.name;
    info.appendChild(detachment);
    
    const size = Builder.createElementWithAttributes('div');
    size.appendChild(Builder.createBoldSpan('Size: '));
    size.innerHTML += roster.battleSize;
    info.appendChild(size);

    button.appendChild(info);

    return button;
  }

  static getHead(roster) {
    const head = Builder.createElementWithAttributes('head');

    head.appendChild(Builder.createElementWithAttributes('meta', [
      { attribute: 'charset', value: 'UTF-8' },
    ]));
    head.appendChild(Builder.createElementWithAttributes('meta', [
      { attribute: 'name', value: 'viewport' },
      { attribute: 'content', value: 'width=device-width, initial-scale=1.0' },
    ]));
    head.appendChild(Builder.createElementWithAttributes('meta', [
      { attribute: 'http-equiv', value: 'X-UA-Compatible' },
      { attribute: 'content', value: 'ie=edge' },
    ]));
    head.appendChild(Builder.createElementWithContent('style', css));
    head.appendChild(Builder.createElementWithContent('script', script));
    head.appendChild(Builder.createElementWithContent('title', roster.name));

    return head;
  }

  static stringToId(string) {
    return string.replace(/[\n\s]/g, '-');
  }

  static createBoldSpan(content) {
    const span = Builder.createElementWithAttributes('span', [{ attribute: 'class', value: 'bold' }]);
    span.innerHTML = content;

    return span;
  }

  static createElementWithContent(tag, content = '') {
    const element = document.createElement(tag);
    element.innerHTML = content;

    return element;
  } 

  static createElementWithAttributes(tag, attributes = []) {
    const element = document.createElement(tag);
    attributes.forEach(({ attribute, value }) => {
      element.setAttribute(attribute, value);
    });

    return element;
  }

  static createElementwithAttributesAndContent(tag, attributes = [], content = '') {
    const element = Builder.createElementWithAttributes(tag, attributes);
    element.innerHTML = content;

    return element;
  }

  static getTooltip(text, description) {
    return `<span class="tooltip-on-hover">${text}<div class="tooltip"><span class="bold">${text}:</span><br />${description}</div></span>`;
  }
}
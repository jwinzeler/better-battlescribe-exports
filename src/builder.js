class Builder {
  static getOutput(roster, armyRules) {
    Logger.log('Building .html file...');
    const html = `
    <html>
      <head>
        <title>${roster.name}</title>
        ${Builder.getMetaTags(roster)}
      </head>
      <body>
        <div id="backdrop"></div>
        ${Builder.getAside(roster)}
        ${Builder.getMain(roster, armyRules)}
      </body>
    </html>
    `;

    Logger.log('Finished .html file.');

    return html;
  }

  static getMain(roster, armyRules) {
    const overviewPage = Builder.getOverviewPage(armyRules);
    const unitPages = roster.units.map((unit) => Builder.getUnitPage(unit));

    return `
      <main>
        ${Builder.getToggleAsideButton('<', 'open')}
        ${overviewPage}
        ${unitPages.join('')}
      </main>
    `;
  }

  static getOverviewPage(armyRules) {
    return `
        <div id="overview-page" class="page">
          <div class="left-column">
            ${Builder.getRules('Army rules', 'army-rules', armyRules.army_rules)}
            ${Builder.getRules('Detachment rules', 'detachment-rules', armyRules.detachment_rules)}
          </div>
          <div class="right-column">
            ${Builder.getStratagems(armyRules.stratagems)}
          </div>
        </div>
    `;
  }

  static getRules(name, id, rules) {
    const rulesHtml = rules.map((rule) => `<div class='rule-row header'>${rule.name.toUpperCase()}</div><div class='rule-row'>${rule.description}</div>`);
    return `
        <div id="${id}" class='rules visible'>
          <h4><span>${name}</span><span onclick="toggleRulesVisibility('${id}')" class="visibility-button">-</span></h4>
          ${rulesHtml.join('')}
        </div>
    `;
  }

  static getStratagemThemeClass(when) {
    if (when.toLowerCase().includes('opponent')) return "enemy-turn";
    return when.toLowerCase().includes('your') ? "your-turn" : "both-turn";
  }

  static getStratagems(stratagems) {
    const stratagemsHtml = stratagems.map((gem) => `
      <div class="stratagem ${Builder.getStratagemThemeClass(gem.when)}">
        <div class='rule-row header'>${gem.name.toUpperCase()}</div>
        <div class='rule-row'><b>When: </b>${gem.when}</div>
        <div class='rule-row'><b>Target: </b>${gem.target}</div>
        <div class='rule-row'><b>Effect: </b>${gem.effect}</div>
        ${gem.restrictions ? `<div class='rule-row'><b>Restrictions: </b>${gem.restrictions}</div>` : ""}
        <div class='cost'>${gem.cost} CP</div>
      </div>
      `);

    return `
        <div id="stratagems">
          <h4>Stratagems</h4>
          <div class="stratagems-wrapper">
          ${stratagemsHtml.join('')}
          </div>
        </div>
    `;
  }

  static getUnitPage(unit) {
    const id = Builder.stringToId(unit.name);

    return `
      <div id="${id}-page" class="page">
        <div class="datasheet">
          ${Builder.getDatasheetHeader(unit)}
          <div class="datasheet-body">
            <div class="column-left">
              <div class="column-padding">
                ${Builder.getLeftColumn(unit)}
              </div>
            </div>
            <div class="column-right">
              <div class="column-padding">
                ${Builder.getRightColumn(unit)}
              </div>
            </div>
            <div class="column-bottom">
              <div class="column-padding">
                ${Builder.getBottomColumn(unit)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static getLeftColumn(unit) {
    let rangedWeaponsTable = '';
    let meleeWeaponsTable = '';

    if (unit.rangedWeapons.length) {
      rangedWeaponsTable = Builder.createTable([
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
    }

    if (unit.meleeWeapons.length) {
      meleeWeaponsTable = Builder.createTable([
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
    }

    return `
      ${rangedWeaponsTable}
      ${meleeWeaponsTable}
    `;
  }

  static getRightColumn(unit) {
    const invulnerableSaveAbility = unit.abilities.abilities.find((ability) => ability.name === "Invulnerable Save");
    let invulnerableSaveAbilityHtml = '';

    if (invulnerableSaveAbility) {
      invulnerableSaveAbilityHtml = `
        <table>
          <tr>
            <th>
              ${invulnerableSaveAbility.name}
            </th>
            <th class="invuln">
              <div>
                ${invulnerableSaveAbility.description.replace(/.*?([\d]+\+).*?$/g, '$1')}
              </div>
            </th>
          </tr>
        </table>
      `;
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

    const abilitiesTable = Builder.createTable(tableData);

    return `
      ${invulnerableSaveAbilityHtml}
      ${abilitiesTable}
    `;
  }

  static getBottomColumn(unit) {
    return `
      <div class="keywords">
        KEYWORDS: <span class="bold">${unit.keywords.join(', ')}</span>
      </div>
    `;
  }

  static createTable(data) {
    return `
      <table>
        ${data.map((row, index) => `
          <tr>
            ${row.map((column) => `
              <${index ? 'td' : 'th'}>
                ${column}
              </${index ? 'td' : 'th'}>
            `).join('')}
          </tr>
        `).join('')}
      </table>
    `;
  }

  static getDatasheetHeader(unit) {
    return `
      <header>
        <div class="unit-name">
          ${unit.name}
        </div>
        <div class="stats-wrapper">
          ${unit.stats.map((stats) => `
            ${Object.keys(stats).filter((stat) => stat !== 'name').map((stat) => `
              <div class="stat">
                <div class="stat-name">
                  ${stat}
                </div>
                <div class="stat-value">
                  ${stats[stat]}
                </div>
              </div>
            `).join('')}
          `).join('')}
        </div>
      </header>
    `;
  }

  static getAside(roster) {
    return `
      <aside>
        ${Builder.getToggleAsideButton('X', 'close')}
        ${Builder.getOverviewButton(roster)}
        ${roster.units.map((unit) => Builder.getUnitButton(unit)).join('')}
      </aside>
    `;
  }

  static getUnitButton(unit) {
    const id = Builder.stringToId(unit.name);

    return `
      <button onclick="togglePage('${id}-page')" id="${id}-button">
        ${unit.name}
        <div class="overview-info">
          ${unit.selections.map((selection) => `
            <div>
              <span class="bold">Selections: </span>${selection.join('')}
            </div>
          `).join('')}
        </div>
      </button>
    `;
  }

  static getOverviewButton(roster) {
    return `
      <button onclick="togglePage('overview-page')" id="overview-button">
        ${roster.name}
        <div class="overview-info">
          <div>
            <span class="bold">Faction: </span>${roster.faction.name}
          </div>
          <div>
            <span class="bold">Detachment: </span>${roster.detachment.name}
          </div>
          <div>
            <span class="bold">Size: </span>${roster.battleSize}
          </div>
        </div>
      </button>
    `;
  }

  static getToggleAsideButton(text, id) {
    return `
      <button onclick="toggleAside()" class="toggle-aside" id="${id}">
        ${text}
      </button>
    `;
  }

  static getMetaTags() {
    return `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <style>
        ${css}
      </style>
      <script>
        ${script}
      </script>
    `;
  }

  static getTooltip(text, description) {
    return `
      <span class="tooltip-on-hover">
        ${text}
        <div class="tooltip">
          <span class="bold">
            ${text}:¨
          </span>
          <br />
          ${description}
        </div>
      </span>
    `;
  }

  static stringToId(string) {
    return string.replace(/[\n\s]/g, '-').toLowerCase();
  }
}
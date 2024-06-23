class Builder {
  static getOutput(roster) {
    Logger.log('Building .html file...');
    const html = `
    <html>
      <head>
        <title>${roster.name}</title>
        ${this.getMetaTags(roster)}
      </head>
      <body class="${roster.faction.name.toLowerCase().replace(/- /g, '').replace(/ /g, '_')} ${WURFL.form_factor.toLowerCase()}">
        <div id="backdrop"></div>
        ${this.getAside(roster)}
        ${this.getMain(roster)}
      </body>
    </html>
    `;

    Logger.log('Finished .html file.');

    return html;
  }

  static getMain(roster) {
    const overviewPage = roster.armyData ? this.getOverviewPage(roster) : '';
    const unitPages = roster.units.map((unit, index) => this.getUnitPage(unit, index));

    return `
      <main>
        ${this.getToggleAsideButton('<', 'open')}
        ${overviewPage}
        ${unitPages.join('')}
      </main>
    `;
  }

  static getOverviewPage(roster) {
    return `
        <div id="overview-page" class="page active">
          <div class="left-column">
            ${this.getRules('Army rules', roster.armyData.factionAbilities || [])}
            ${this.getRules('Detachment rules', roster.armyData.detachmentAbilities || [])}
            ${this.getArmyComposition(roster)}
          </div>
          <div class="right-column">
            ${this.getStratagems('Detachment', roster.armyData.detachmentStrats)}
            ${this.getStratagems('Core', roster.armyData.coreStrats)}
          </div>
        </div>
    `;
  }

  static getRules(name, rules) {
    return `
      <div>
        <details class="title-details" open>
          <summary>
            ${name}
          </summary>
          ${rules.map((rule, i) => `
            <details class="content-details" open>
              <summary>
                ${rule.name.toLowerCase()}
              </summary>
              <p class="description">
              ${rule.description}
              </p>
              ${i === rules.length-1 ? '' : '<hr>' }
            </details>
          `).join('')}
        </details>
      </div>
    `;
  }

  static getArmyComposition(roster) {
    return `
    <div>
      <details class="title-details" open>
        <summary>Army Composition</summary>
        <table class="army-comp">
          <tr>
            <th>Unit</th>
            <th>Cost</th>
          </tr>
          ${roster.armyComposition.map((unit) => `
            <tr>
              <td>${unit.count}x ${unit.name} (${unit.points.replace('pts', '')})</td>
              <td>${Number(unit.points.replace('pts', '')) * Number(unit.count)}</td>
            </tr>
          `).join('')}
          <tr>
            <th>Total</th>
            <th>${roster.faction.points.replace('pts', '')}</td>
          </tr>
        </table>
      </details>
    </div>
  `;
  }

  static getStratagems(type, stratagems) {
    if (!stratagems) return '';

    const stratagemsHtml = stratagems.map((stratagem) => `
      <div class="stratagem ${stratagem.turn.toLowerCase().replace(/- /g, '').replace(/ /g, '-').replace(/'|’/g, '')}">
        <div class='rule-row header'>
          <div>${stratagem.name}</div>
        <div class='cost'>${stratagem.cp_cost} CP</div>
        </div>
        <div class='rule-row small'>${stratagem.type}</div>
        <div class='rule-row'>${stratagem.description}</div>
      </div>
      `);

    return `
        <details class="title-details" id="stratagems" open>
          <summary>
            ${type} Stratagems
          </summary>
          <div class="stratagems-wrapper">
            ${stratagemsHtml.join('')}
          </div>
        </details>
    `;
  }

  static getUnitPage(unit, index) {
    const id = this.stringToId(unit.name + index);

    return `
      <div id="${id}-page" class="page">
        <div class="datasheet">
          ${this.getDatasheetHeader(unit, id, index)}
          <div class="datasheet-body">
            <div class="column-left">
              <div class="column-padding">
                ${this.getLeftColumn(unit)}
              </div>
            </div>
            <div class="column-right">
              <div class="column-padding">
                ${this.getRightColumn(unit)}
              </div>
            </div>
            <div class="column-bottom">
              <div class="column-padding">
                ${this.getBottomColumn(unit)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static getLeftColumn(unit) {
    const getWeaponTable = (name, skill, weapons) => this.createTable([
      [name, 'RANGE', 'A', skill, 'S', 'AP', 'D'],
      ...weapons.map((weapon) => ([
        `${weapon.name}${Array.isArray(weapon.keywords) && weapon.keywords.length ? `<br /><b class="small">[${weapon.keywords.join(', ')}]` : ''}</b>`,
        weapon.range,
        weapon.attacks,
        weapon.skill,
        weapon.strength,
        weapon.armorPenetration,
        weapon.damage,
      ])),
    ]);

    const rangedWeaponsTable = unit.rangedWeapons.length ? getWeaponTable('RANGED WEAPONS', 'BS', unit.rangedWeapons) : '';
    const meleeWeaponsTable = unit.meleeWeapons.length ? getWeaponTable('MELEE WEAPONS', 'WS', unit.meleeWeapons) : '';

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
          <tr>
            <td>
              <div>
                ${invulnerableSaveAbility.description}
              </div>
            </td>
          </tr>
        </table>
      `;
    }

    const abilitiesTableData = [
      ['ABILITIES'],
    ];

    if (unit.ruleKeys) {
      abilitiesTableData.push([`CORE: <b>${unit.ruleKeys.flat(1).join(', ')}</b>`]);
    }

    if (unit.abilities.abilities) {
      abilitiesTableData.push(
        ...unit.abilities.abilities
          .filter((ability) => !['Invulnerable Save', 'Leader'].includes(ability.name))
          .map((ability) => ([
            `<b>${ability.name}: </b>${ability.description}`,
          ]),
        ),
      );
    }

    const abilitiesTable = this.createTable(abilitiesTableData);

    let specialSectionAbilitiesTable = '';

    if (unit.specialSectionAbilities.abilityTypes.length) {
      const specialSectionAbilitiesTableData = [unit.specialSectionAbilities.abilityTypes];
      specialSectionAbilitiesTableData.push(
        ...unit.specialSectionAbilities.abilityTypes.map((type) => 
          unit.specialSectionAbilities.abilities
          .filter((ability) => ability.type === type)
          .map((ability) => ([
            `<b>${ability.name}: </b>${ability.description}`,
          ])),
        )
        .flat(),
      );

      specialSectionAbilitiesTable = this.createTable(specialSectionAbilitiesTableData);
    }

    const extraSectionData = [
      ['EXTRA'],
      /*[`
        <b>Model Composition:</b><br />
        ${unit.selections.map((selections) => `${selections.join(', ')}<br />`)}
      `],*/
      [`
        <b>Unit Composition:</b><br />
        ${unit.flatSelections.map((selection) => `${selection.count}x ${selection.name}`).join('<br />')}
      `],
    ];

    const leaderAbility = unit.abilities.abilities.find((ability) => ability.name === "Leader");
    if (leaderAbility) {
      extraSectionData.push(
        [`<b>${leaderAbility.name}: </b>${leaderAbility.description}`]
      );
    }

    const extraSection = this.createTable(extraSectionData);

    return `
      ${invulnerableSaveAbilityHtml}
      ${abilitiesTable}
      ${specialSectionAbilitiesTable}
      ${extraSection}
    `;
  }

  static getBottomColumn(unit) {
    return `
      <div class="keywords">
        KEYWORDS: <b>${unit.keywords.flat(1).join(', ')}</b>
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

  static getDatasheetHeader(unit, id, unitIndex) {
    return `
      <header>
        <div class="unit-name">
          ${unit.name}
        </div>
        <div class="main-stats-wrapper">
          ${unit.stats.map((stats, index) => `
          <div class="stats-wrapper">
            ${Object.keys(stats).filter((stat) => stat !== 'name').map((stat) => `
              <div class="stat">
                ${index === 0 ? `
                  <div class="stat-name">
                    ${stat}
                  </div>
                ` : ''}
                <div class="stat-value">
                  ${stats[stat]}
                </div>
              </div>
            `).join('')}
            ${unit.stats.length > 1 ? `<div class="stats-model-name${index === 0 ? ' first' : ''}">${stats.name}</div>` : ''}
            </div>
          `).join('')}
          <button class='death-button' onclick='toggleDeath("${id}","${unitIndex}",this)'>Mark as dead</button>
          </div>
      </header>
    `;
  }

  static getAside(roster) {
    return `
      <aside>
        ${this.getToggleAsideButton('X', 'close')}
        ${this.getOverviewButton(roster)}
        ${roster.units.map((unit, index) => this.getUnitButton(unit, index)).join('')}
        <div id='death-list'></div>
      </aside>
    `;
  }

  static getUnitButton(unit, index) {
    const id = this.stringToId(unit.name + index);
    return `
      <button class="sidebar-button" index=${index} onclick="togglePage('${id}')" id="${id}-button">
        ${unit.name}
        ${unit.sidebarSelections.length ? `
          <div class="overview-info">
            <div>
              ${unit.sidebarSelections.map((selection) => `${selection.count}x ${selection.name}`).join('<br />')}
            </div>
          </div>
        ` : ''}        
      </button>
    `;
  }

  static getOverviewButton(roster) {
    return `
      <button class="sidebar-button"  onclick="togglePage('overview')" id="overview-button">
        ${roster.name}
        <div class="overview-info">
          <div>
            <b>Faction: </b>${roster.faction.name}
          </div>
          <div>
            <b>Detachment: </b>${roster.detachment.name}
          </div>
          <div>
            <b>Points: </b>${roster.faction.points}
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
    return `<span class="tooltip-on-hover">${text}<span class="tooltip">
        <span class="title">
          ${text}
        </span>
        <span class="description">
          ${description.trim()}
        </span>
      </span></span>`;
  }

  static stringToId(string) {
    return string.replace(/[\n\s]/g, '-').replace(/(<([^>]+)>)/ig, '').toLowerCase();
  }

  static isTablet() {
    return (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }
}
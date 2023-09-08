class ArmyCustomizer {

	static EMPTY_STATS = { name: 'New name', M: "0\"", T: "0", SV: "0+", W: "0", LD: "0+", OC: "0", };
	static EMPTY_WEAPONS = (skill) => ({ name: 'New weapon', A: 0, [skill]: 0, S: 0, AP: 0, D: 0 });
	static REQUIRED_WEAPON_KEYS = ['attacks', 'skill', 'strength', 'armorPenetration', 'damage'];

	static show(roster) {
		Logger.log('Building army customizer...');

		const html = `
			<div>
				<b>Roster name:</b>
				<input value="${roster.name}" onchange="ArmyCustomizer.changeRosterName(this.value)"/>
			</div>
			${this.buildUnitTable(roster.units)}
		`;
		document.getElementById('customizer').innerHTML = html;
		TempStorage.setItem('tempRoster', roster);
		Logger.log('Finished customizer.');
	}

	static buildUnitTable(units) {
		let html = '';
		units.forEach(unit => {
			html += `<details class='second-level-details'><summary>${unit.name}</summary>`;
			html += this.addStatsTable(unit);
			html += this.addWeaponsTable(unit, 'Melee weapons', 'meleeWeapons', 'WS');
			html += this.addWeaponsTable(unit, 'Ranged weapons', 'rangedWeapons', 'BS');
			html += `</details>`;
		});
		return html;
	}

	static addRow(unitName, paramName) {
		const roster = TempStorage.getItem('tempRoster');
		const unitIndex = roster.units.map(u => u.name).indexOf(unitName);
		const paramArray = roster.units[unitIndex][paramName];
		let value = '';

		switch (paramName) {
			default:
			case 'stats':
				value = Object.assign({ ...this.EMPTY_STATS });
				break;
			case 'meleeWeapon':
				value = Object.assign({ ...this.EMPTY_WEAPONS('WS') });
				break;
			case 'rangedWeapon':
				value = Object.assign({ ...this.EMPTY_WEAPONS('BS') });
				break;
		}
		roster.units[unitIndex][paramName][paramArray.length] = value;
		this.show(roster);
	}

	static getAddButton(unitName, param) {
		return `<button onclick="ArmyCustomizer.addRow('${unitName}','${param}')">Add row</button>`;
	}

	static addStatsTable(unit) {
		if (!unit.stats.length) unit.stats = [this.EMPTY_STATS];
		return `
		<details class='third-level-details'>
			<summary>Stats</summary>
			${this.getAddButton(unit.name, 'stats')}
			${this.createTableWithInputs(unit.name, 'stats', [
			['Name', 'M', 'T', 'SV', 'W', 'LD', 'OC'],
			...unit.stats.map(stats => (Object.keys(stats).map(key => ({ param: key, value: stats[key] }))))
		])}
		</details>`;
	}

	static addWeaponsTable(unit, name, param, skill) {
		return `
		<details class='third-level-details'>
			<summary>${name}</summary>
			${this.getAddButton(unit.name, param)}
			${unit.meleeWeapons.map(weapon => (
			this.createTableWithInputs(unit.name, param, [
				['Name', 'A', skill, 'S', 'AP', 'D'],
				[{ param: 'name', value: weapon.name }, ...Object.keys(weapon).filter(key => this.REQUIRED_WEAPON_KEYS.includes(key)).map(key => ({ param: key, value: weapon[key] }))]
			])))}
		</details>`;
	}

	static changeRosterName(rosterName) {
		const roster = TempStorage.getItem('tempRoster');
		roster.name = rosterName;
		TempStorage.setItem('tempRoster', roster);
	}

	static changeValue(unitName, paramName, index, variableName, value) {
		const roster = TempStorage.getItem('tempRoster');
		const unitIndex = roster.units.map(u => u.name).indexOf(unitName);
		roster.units[unitIndex][paramName][index][variableName] = value;
		TempStorage.setItem('tempRoster', roster);
	}


	static createTableWithInputs(unitName, paramName, data) {
		return `
			<table>
				${data.map((row, index) => `
				<tr>
					${row.map((column) => `
					<${index ? 'td' : 'th'}>

					${index ? `<input value="${column.value}" onchange='ArmyCustomizer.changeValue("${unitName}","${paramName}",${index - 1},"${column.param}",this.value)'/>` : column.value || column}
					
					</${index ? 'input' : 'th'}>
					`).join('')}
				</tr>
				`).join('')}
		  </table> `;
	}
}

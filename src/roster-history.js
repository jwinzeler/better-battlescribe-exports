class RosterHistory {

	static get() {
		let historyStore = localStorage.getItem('roster-history');
		historyStore = !historyStore ? { history: [] } : JSON.parse(historyStore);
		return historyStore;
	}

	static showList() {
		const historyEl = document.getElementById('history');
		const historyListEl = document.getElementById('history-list');

		let rosterHistory = this.get();
		let html = '';
		if (rosterHistory.history.length) {
			rosterHistory.history.forEach((roster, index) => {
				html += ` 
					<div class='roster-history-box'>
						<div class='backdrop'">
							<div class="load-wrapper" onclick="Main.rerun(${index})"><b>LOAD</b></div>
							<div class='delete' onclick="RosterHistory.remove(${index})"><b>X</b></div>
						</div>
						<span><b>Name:</b> ${roster.name}</span>
						<span><b>Faction:</b> ${roster.faction.name}</span>
						<span><b>Detachment:</b> ${roster.detachment.name}</span>
						<span><b>Points:</b> ${roster.faction.points}</span>
					</div>`;
			});
			historyListEl.innerHTML = html;
			historyEl.removeAttribute('hidden');
		} else {
			historyEl.setAttribute('hidden', true);
		}
	}

	static add(roster) {
		const historyStore = this.get();
		historyStore.history.unshift(roster);
		localStorage.setItem('roster-history', JSON.stringify(historyStore));
		this.showList();
	}

	static remove(index) {
		const historyStore = this.get();
		historyStore.history = historyStore.history.filter((h, i) => i !== index);
		localStorage.setItem('roster-history', JSON.stringify(historyStore));
		this.showList();
	}

	static addToList(roster) {
		const historyStore = this.get();
		historyStore.history.unshift(roster);
		localStorage.setItem('roster-history', JSON.stringify(historyStore));
		this.showList();
	}

}
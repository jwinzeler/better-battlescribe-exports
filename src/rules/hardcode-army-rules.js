class HardcodeArmyRules {
	static data = {
		aeldari_craftworlds,
		chaos_chaos_daemons,
		chaos_world_eaters,
		imperium_adeptus_astartes_deathwatch,
		imperium_adeptus_custodes,
		imperium_adeptus_mechanicus,
		xenos_tau_empire,
		xenos_tyranids,
		xenos_leagues_of_votann,
	};

	static get(armyName, detachmentName) {
		const toSnakeCase = (string) => string?.toLowerCase().replace(/- /g, '').replace(/ /g, '_').replace(/['\']/g, '') || '';
		const armyRules = HardcodeArmyRules.data[toSnakeCase(armyName)];

		return {
			...armyRules,
			detachment: armyRules?.detachments?.[toSnakeCase(detachmentName)],
		};
	}
};

class HardcodeArmyRules {
	static data = {
		imperium_adeptus_mechanicus: {
			army_rules: [{
				name: `DOCTRINA IMPERATIVES`,
				description: `At the start of the battle round, you can select one of the
			Doctrina Imperatives below. Until the end of the battle
			round, that Doctrina Imperative is active for your army, and
			all units from your army that have the Doctrina Imperatives
			ability gain the relevant abilities shown below.
			PROTECTOR IMPERATIVE
			■ Ranged weapons equipped by models in this unit have
			the [HEAVY] ability.
			■ Each time a ranged attack targets this unit, if this unit
			is within your deployment zone, worsen the Armour
			Penetration characteristic of that attack by 1.
			CONQUEROR IMPERATIVE
			■ Ranged weapons equipped by models in this unit have
			the [ASSAULT] ability.
			■ Each time a model in this unit makes a ranged attack,
			if the target of that attack is within your opponent's
			deployment zone, improve the Armour Penetration
			characteristic of that attack by 1`
			}],
			detachment_rules: [{
				name: `RAD-BOMBARDMENT`,
				description: `BATTLE ROUND 1
				BOMBARDMENT
				At the start of the first battle round, for each enemy unit
				within your opponent's deployment zone, your opponent
				must decide whether that unit will take cover or stand firm.
				If a unit takes cover, until the end of the battle round, that
				unit is Battle-shocked. If a unit stands firm, roll one D6 for
				that unit: on a 3+, that unit suffers D3 mortal wounds.
				BATTLE ROUND 2 ONWARDS
				FALLOUT
				At the start of the second, third, fourth and fifth battle
				rounds, roll one D6 for each enemy unit within your
				opponent's deployment zone. On a 3+, that unit suffers 1
				mortal wound.`
			}],
			stratagems: [
				{
					name: 'BALEFUL HALO',
					when: 'Fight phase, just after an enemy unit has selected its targets.',
					target: 'One Adeptus Mechanicus unit from your army (excluding Vehicle units) that was selected as the target of one or more of that enemy unit’s attacks.',
					effect: 'Until the end of the turn, each time an attack is made that targets your unit, subtract 1 from the Wound roll. ',
					cost: 1,
				},
				{
					name: 'LETHAL DOSAGE',
					when: 'Your Shooting phase.',
					target: ' One Adeptus Mechanicus unit from your army that has not been selected to shoot this phase.',
					effect: 'Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit (excluding Vehicle units), add 1 to the Wound roll.',
					cost: 2,
				},
				{
					name: 'EXTINCTION ORDER',
					when: 'Your Command phase.',
					target: 'One Tech-Priest model from your army and one objective marker within 24" of that model.',
					effect: 'Roll one D6 for each enemy unit within range of that objective marker. On a 4+, that unit suffers 1 mortal wound and it must take a Battle-shock test.',
					cost: 1,
				},
				{
					name: 'AGGRESSOR IMPERATIVE',
					when: 'Your Charge phase.',
					target: 'One Skitarii unit from your army that Advanced this turn.',
					effect: 'Until the end of the turn, your unit is eligible to declare a charge even though it Advanced this turn.',
					restrictions: 'You can only use this Stratagem if the Conqueror Imperative is active for your army.',
					cost: 1,
				},
				{
					name: 'VENGEFUL FALLOUT',
					when: 'Your opponent’s Shooting phase, just after an enemy unit has resolved its attacks',
					target: 'One Adeptus Mechanicus unit from your army that was selected as the target of one or more of that enemy unit’s attacks',
					effect: ' Your unit can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and it can only do so if that enemy unit is an eligible target. After your unit has finished making these attacks, it is not eligible to shoot again this turn.',
					cost: 1,
				},
				{
					name: 'BULWARK IMPERATIVE',
					when: 'Your opponent’s Shooting phase, just after an enemy unit has selected its targets.',
					target: 'One Skitarii unit from your army that was selected as the target of one or more of that enemy unit’s attacks',
					effect: ': Until the end of the turn, models in your unit have a 4+ invulnerable save',
					restrictions: 'You can only use this Stratagem if the Protector Imperative is 	active for your army',
					cost: 1,
				},

			]
		},
		xenos_tyranids: {
			army_rules: [
				{
					name: `SYNAPSE`,
					description: `If your Army Faction is Tyranids, while a Tyranids
				unit from your army is within 6" of one or more
				Synapse models from your army, that unit is said to
				be within Synapse Range of your army. Each time a
				Tyranids unit from your army takes a Battle-shock
				test, if it is within Synapse Range of your army, take
				that test on 3D6 instead of 2D6.`
				},
				{
					name: `SHADOW IN THE WARP`,
					description: `If your Army Faction is Tyranids, once per battle, in
				either player’s Command phase, if one or more units
				from your army with this ability are on the battlefield,
				you can unleash the Shadow in the Warp. When you
				do, each enemy unit on the battlefield must take a
				Battle-shock test.`
				},
			],
			detachment_rules: [{
				name: `HYPER-ADAPTATIONS`,
				description: `At the start of the first battle round, select one of the
				following Hyper-adaptations to be active for Tyranids
				units from your army until the end of the battle:
				SWARMING INSTINCTS
				Each time a Tyranids model with this
				Hyper-adaptation makes an attack that targets an
				enemy Infantry or Swarm unit, that attack has the
				[SUSTAINED HITS 1] ability.
				HYPER-AGGRESSION
				Each time a Tyranids model with this
				Hyper-adaptation makes an attack that targets an
				enemy Monster or Vehicle unit, that attack has the
				[LETHAL HITS] ability.
				HIVE PREDATORS
				Each time a Tyranids model with this
				Hyper-adaptation makes an attack that targets an
				enemy Character unit, if a Critical Hit is scored, that
				attack has the [PRECISION] ability.`
			}],
			stratagems: [
				{
					name: 'RAPID REGENERATION',
					when: 'Your opponent’s Shooting phase or the Fight phase, just after an enemy unit 	has selected its targets.',
					target: 'One Tyranids unit from your army that was selected as the target of one or more of the attacking unit’s attacks',
					effect: 'Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within Synapse Range of your army, until the end of the phase, models in your unit have the Feel No Pain 5+ ability instead.',
					cost: 1,
				},
				{
					name: 'ADRENAL SURGE',
					when: 'Fight phase.',
					target: 'Up to two Tyranids units from your army that are within Synapse Range of your army and are eligible to fight, or one other Tyranids unit from your army that is eligible to fight',
					effect: ': Until the end of the phase, each time a model in one of those selected units makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.',
					cost: 2,
				},
				{
					name: 'DEATH FRENZY',
					when: 'Fight phase, just after an enemy unit has selected its targets.',
					target: 'One Tyranids unit from your army that was selected as the target of one or more of the attacking unit’s attacks.',
					effect: 'Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making attacks, and is then removed from play',
					cost: 1,
				},
				{
					name: 'OVERRUN',
					when: 'Fight phase, just before a Tyranids unit from your army Consolidates.',
					target: 'That Tyranids unit.',
					effect: 'Until the end of the phase, each time a model in your unit makes a Consolidation move, it can move up to 6" instead of up to 3", provided your unit can end its Consolidation move in Unit Coherency and within Engagement Range of one or more enemy units. If your unit is within Synapse Range of your army and not within Engagement Range of any enemy units, instead of making that Consolidation move, it can instead make a Normal move of up to 6".',
					cost: 1,
				},
				{
					name: 'SYNAPTIC INSIGHT',
					when: 'Your Command phase',
					target: 'Up to two Tyranids units from your army that are within Synapse Range of your army, or one other Tyranids unit from your army.',
					effect: 'Select one Hyper-adaptation. Until the end of the battle round, that hyper-adaptation is active for those selected units in addition to any other that may be active for your army.',
					restrictions: 'You cannot select the same hyper-adaptation you selected at the start of the first battle round.',
					cost: 1,
				},
				{
					name: 'ENDLESS SWARM',
					when: 'Your Command phase.',
					target: 'Up to two Endless Multitude units from your army that are within Synapse Range of your army, or one other Endless Multitude unit from your army.',
					effect: 'Up to D3+3 destroyed models are returned to each of the selected units.',
					cost: 1,
				},

			]
		},
	};

	static get(armyName) {
		const data = HardcodeArmyRules.data;
		return data[armyName.toLowerCase().replace(/- /g, '').replace(/ /g, '_')];
	}
}
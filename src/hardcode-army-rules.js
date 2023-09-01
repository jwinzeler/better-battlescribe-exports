class HardcodeArmyRules {
	static data = {
		imperium_adeptus_mechanicus: {
			army_rules: [{
				name: `DOCTRINA IMPERATIVES`,
				description: `At the start of the battle round, you can select one of the Doctrina Imperatives below. Until the end of the battle round, that Doctrina Imperative is active for your army, and all units from your army that have the Doctrina Imperatives ability gain the relevant abilities shown below.
				
				PROTECTOR IMPERATIVE
				■ Ranged weapons equipped by models in this unit have the [HEAVY] ability.
				■ Each time a ranged attack targets this unit, if this unit is within your deployment zone, worsen the Armour Penetration characteristic of that attack by 1.
				
				CONQUEROR IMPERATIVE
				■ Ranged weapons equipped by models in this unit have the [ASSAULT] ability.
				■ Each time a model in this unit makes a ranged attack, if the target of that attack is within your opponent's deployment zone, improve the Armour Penetration characteristic of that attack by 1`
			}],
			detachment_rules: [{
				name: `RAD-BOMBARDMENT`,
				description: `BATTLE ROUND 1 BOMBARDMENT
				At the start of the first battle round, for each enemy unit within your opponent's deployment zone, your opponent must decide whether that unit will take cover or stand firm.
				If a unit takes cover, until the end of the battle round, that unit is Battle-shocked. If a unit stands firm, roll one D6 for that unit: on a 3+, that unit suffers D3 mortal wounds.
				
				BATTLE ROUND 2 ONWARDS
				FALLOUT
				At the start of the second, third, fourth and fifth battle rounds, roll one D6 for each enemy unit within your opponent's deployment zone. On a 3+, that unit suffers 1 mortal wound.`
			}],
			stratagems: [
				{
					name: 'BALEFUL HALO',
					when: 'Fight phase, just after an enemy unit has selected its targets.',
					target: 'One Adeptus Mechanicus unit from your army (excluding Vehicle units) that was selected as the target of one or more of that enemy unit\'s attacks.',
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
					when: 'Your opponent\'s Shooting phase, just after an enemy unit has resolved its attacks',
					target: 'One Adeptus Mechanicus unit from your army that was selected as the target of one or more of that enemy unit\'s attacks',
					effect: ' Your unit can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and it can only do so if that enemy unit is an eligible target. After your unit has finished making these attacks, it is not eligible to shoot again this turn.',
					cost: 1,
				},
				{
					name: 'BULWARK IMPERATIVE',
					when: 'Your opponent\'s Shooting phase, just after an enemy unit has selected its targets.',
					target: 'One Skitarii unit from your army that was selected as the target of one or more of that enemy unit\'s attacks',
					effect: 'Until the end of the turn, models in your unit have a 4+ invulnerable save',
					restrictions: 'You can only use this Stratagem if the Protector Imperative is 	active for your army',
					cost: 1,
				},

			]
		},
		imperium_adeptus_astartes_deathwatch: {
			army_rules: [{
				name: `KILL TEAMS`,
				description: `Each time an attack targets a Kill Team unit from your army that contains models with different Toughness characteristics, until the attacking unit has finished making its attacks, use the Toughness characteristic of the majority of the models in that unit when determining what roll is required for that attack to successfully wound. If two or more Toughness characteristics are tied for majority, use the highest value. For the purposes of determining which models can embark within a Transport model, Kill Team Terminator models, Kill Team Outrider models, Kill Team Biker models and models equipped with a jump pack each take up the space of 2 models, but can otherwise embark within any Transport their unit can embark within, even though similar models in other units may have the Terminator, Mounted or Jump Pack keywords. For the purposes of interacting with terrain features, all models in units with the Kill Team ability are treated as Infantry, even though similar models in other units may have the Mounted or Jump Pack keywords.`
			},
			{
				name: `OATH OF MOMENT`,
				description: `If your Army Faction is Adeptus Astartes, at the start of your Command phase, select one unit from your opponent\'s army. Until the start of your next Command phase, each time a model from your army with this ability makes an attack that targets that enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll`
			}],
			detachment_rules: [{
				name: `MISSION TACTICS`,
				description: `At the start of your Command phase, you can select one of the Mission Tactics listed below. Until the start of your next Command phase, that Mission Tactic is active and its effects apply to all units from your army with this ability. Each Mission Tactic can only be selected once per battle.
				
				FUROR TACTICS
				When the enemy horde grows close, the Deathwatch will be tasked with the decimation of their core. Aiming not for clinical kills but for maximum destruction over a wide area, they tear the heart from the enemy army. While this Mission Tactic is active, weapons equipped by Adeptus Astartes units from your army have the [SUSTAINED HITS 1] ability.
				
				MALLEUS TACTICS
				When the giants of war lumber forth, the Deathwatch will adopt Malleus tactics. Even the largest behemoth has a weak point, and the archives of the Deathwatch number them all. While this Mission Tactic is active, weapons equipped by Adeptus Astartes units from your army have the [LETHAL HITS] ability.
				
				PURGATUS TACTICS
				By adopting Purgatus tactics, the Deathwatch focus their deadly ire upon the commanders of the enemy host, assassinating them one after another with pitiless head shots and killing thrusts of the blade. While this Mission Tactic is active, each time an Adeptus Astartes unit from your army makes an attack, if a Critical Hit is scored, that attack has the [PRECISION] ability.`
			}],
			stratagems: [{
				name: 'ARMOUR OF CONTEMPT',
				when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
				target: 'One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
				effect: 'Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.',
				cost: 1,
			},
			{
				name: 'TELEPORTARIUM',
				when: 'End of your opponent\'s Fight phase.',
				target: 'Up to two Kill Team units from your army, or one other Adeptus Astartes Infantry unit from your army',
				effect: 'Remove those units from the battlefield. In the Reinforcements step of your next Movement phase, set each of those units up anywhere on the battlefield that is more than 9" horizontally away from all enemy models.',
				restrictions: 'You cannot select any units that are within Engagement Range of one or more enemy units.',
				cost: 1,
			},
			{
				name: 'ADAPTIVE TACTICS',
				when: 'Your Command phase',
				target: 'Up to two Kill Team units from your army, or one other Adeptus Astartes unit your army',
				effect: 'For each unit targeted, select the Furor Tactics, Malleus Tactics or Purgatus Tactics. Until the start of your next Command phase, that Mission Tactic is active for that unit instead of any Mission Tactic that is active for your army.',
				cost: 1,
			},
			{
				name: 'HELLFIRE ROUNDS',
				when: 'Your Shooting phase.',
				target: 'Up to two Kill Team units from your army that have not been selected to shoot this phase, or one other Adeptus Astartes unit from your army (excluding Vehicles) that has not been selected to shoot this phase.',
				effect: 'Until the end of the phase, ranged weapons (excluding Devastating Wounds weapons) equipped by models in your unit have the [ANTI-INFANTRY 2+] and [ANTI-MONSTER 5+] abilities.',
				restrictions: 'You cannot select any units that have already been targeted with either the Kraken Rounds or Dragonfire Rounds Stratagems this phase.',
				cost: 1,
			},
			{
				name: 'KRAKEN ROUNDS',
				when: 'Your Shooting phase',
				target: 'Up to two Kill Team units from your army that have not been selected to shoot this phase, or one other Adeptus Astartes unit from your army (excluding Vehicles) that has not been selected to shoot this phase',
				effect: 'Until the end of the phase, improve the Armour Penetration characteristic of ranged weapons equipped by models in your unit by 1 and improve the range characteristic of those weapons by 6".',
				restrictions: 'You cannot select any units that have already been targeted with either the Dragonfire Rounds or Hellfire Rounds Stratagems this phase.',
				cost: 1,
			},
			{
				name: 'DRAGONFIRE ROUNDS',
				when: 'Your Shooting phase.',
				target: 'Up to two Kill Team units from your army that have not been selected to shoot this phase, or one other Adeptus Astartes unit from your army (excluding Vehicles) that has not been selected to shoot this phase',
				effect: 'Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] and [IGNORES COVER] abilities.',
				restrictions: 'You cannot select any units that have already been targeted with either the Kraken Rounds or Hellfire Rounds Stratagems this phase.',
				cost: 1,
			},
			]
		},
		imperium_adeptus_custodes: {
			army_rules: [{
				name: `MARTIAL KA'TAH`,
				description: `At the start of the Fight phase, select one Ka'tah Stance from the list below to be active for your army until the end of the phase.

        While a Ka'tah Stance is active for your army, each unit from your army with this ability gains the relevant ability.
	  
				<b><u>KAPTARIS STANCE</u></b>
        
				■ Each time a melee attack targets this unit, subtract 1 from the Hit roll 

        <b><u>DACATARAI STANCE</u></b>

				■ Melee weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability.

        <b><u>RENDAX STANCE</u></b>

				■ Melee weapons equipped by models in this unit have the [LETHAL HITS] ability.`
			},
			],
			detachment_rules: [{
				name: `SHIELD HOST - AEGIS OF THE EMPEROR`,
				description: `<b>Adeptus Custodes</b> models from your army have the Feel No Pain 4+ ability against mortal wounds.`
			}],
			stratagems: [
				{
					name: 'SLAYERS OF NIGHTMARES',
					when: `Fight phase.`,
					target: `One Adeptus Custodes unit from
          your army that has not been selected to
          fight this phase`,
					effect: `Until the end of the phase, each
          time a model in your unit makes an attack
          that targets a Monster or Vehicle unit,
          add 1 to the Wound roll.`,
					cost: 1,
				},
				{
					name: 'UNWAVERING SENTINELS',
					when: `Start of the Fight phase.`,
					target: `One Adeptus Custodes unit
          from your army (excluding Anathema
          Psykana units) that is within range of an
          objective marker.`,
					effect: `Until the end of the phase, your
          unit has the Fights First ability.`,
					cost: 2,
				},
				{
					name: 'AVENGE THE FALLEN',
					when: `Start of the Fight phase.`,
					target: `One Adeptus Custodes unit
          from your army that is below its Starting
          Strength and has not been selected to
          fight this phase.`,
					effect: `Until the end of the phase, add
          1 to the Attacks characteristic of melee
          weapons equipped by models in that
          unit. If that unit is Below Half-strength,
          until the end of the phase, add 2 to the
          Attacks characteristic of those melee
          weapons instead.`,
					cost: 1,
				},
				{
					name: 'ARCANE GENETIC ALCHEMY',
					when: `Your opponent's Shooting phase or
          the Fight phase, just after an enemy unit
          has selected its targets.`,
					target: `One Adeptus Custodes Infantry
          unit from your army (excluding Anathema
          Psykana units) that was selected as
          the target of one or more of that enemy
          unit's attacks.`,
					effect: `Until the end of the phase, each
          time an attack is allocated to a model in
          your unit, subtract 1 from the Damage
          characteristic of that attack.`,
					cost: 2,
				},
				{
					name: 'VIGIL UNENDING',
					when: `Your Command phase.`,
					target: `One Adeptus Custodes Infantry
          unit from your army (excluding Anathema
          Psykana units).`,
					effect: `One destroyed model (excluding
            Character models) is returned to your
            unit with its full wounds remaining.`,
					restrictions: `: You cannot target the
          same unit with this Stratagem more than
          once per battle.`,
					cost: 1,
				},
				{
					name: 'SWORN GUARDIANS',
					when: `Your Movement phase.`,
					target: `One Adeptus Custodes unit from
          your army (excluding Anathema Psykana
          units) within range of an objective marker
          you control.`,
					effect: `That objective marker remains
          under your control even if you have
          no models within range of it, until your
          opponent controls it at the start or end of
          any turn.`,
					cost: 1,
				},
			]
		},
		chaos_world_eaters: {
			army_rules: [{
				name: `BLESSINGS OF KHORNE`,
				description: `If your Army Faction is World Eaters, at the start of the battle round, you can make a Blessings of Khorne roll. To do so, roll eight D6. 
        
        You can then use those dice to activate up to two Blessings of Khorne from the Blessings of Khorne list (see below). 

        Each Blessing of Khorne specifies the dice results it requires (where a number is specified, a double or triple of that value or higher is required). 

        You can only activate each Blessing of Khorne once per battle round. Any unused dice from the Blessings of Khorne roll are then discarded. 

        Once activated, each Blessing of Khorne applies to all units from your army with this ability until the end of the battle round.
	  
				<b><u>RAGE-FUELLED INVIGORATION</u></b>
        DOUBLE 1+
				■ Add 2" to the Move characteristic of models in this unit 

        <b><u>WRATHFUL DEVOTION</u></b>
        DOUBLE 1+
				■ Models in this unit have the Feel No Pain 6+ ability. If models in this unit already have the Feel No Pain ability, add 1 to their Feel No Pain rolls.

        <b><u>MARTIAL EXCELLENCE</u></b>
        DOUBLE 3+
				■ Melee weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability. 

        <b><u>TOTAL CARNAGE</u></b>
        DOUBLE 4+ OR ANY TRIPLE
				■ Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model\'s unit has finished making its attacks, and is then removed from play
				
				<b><u>WARP BLADES</u></b>
        DOUBLE 5+ OR ANY TRIPLE
				■ Melee weapons equipped by models in this unit have the [LETHAL HITS] ability. 

        <b><u>UNBRIDLED BLOODLUST</u></b>
        DOUBLE 6 OR TRIPLE 4+
				■ This unit is eligible to declare a charge in a turn in which it Advanced.`
			},
			],
			detachment_rules: [{
				name: `RELENTLESS RAGE - BERZERKER WARBAND`,
				description: `Each time a World Eaters unit from your army is selected to fight, if that unit made a Charge move this turn, until the end of the phase, add 1 to the Strength and Attacks characteristics of melee weapons equipped by models in that unit.`
			}],
			stratagems: [
				{
					name: 'GORY MASSACRE',
					when: `Fight phase.`,
					target: `One World Eaters unit from
				your army that made a Charge move this
				turn and destroyed one or more enemy
				units this phase`,
					effect: `In your opponent's next
				Command phase, each enemy unit within
				6" of your unit must take a Battle-shock
				test. If the unit taking that test is Below
				Half-strength, subtract 1 from that test.
				Enemy units affected by this Stratagem
				do not need to take any other Battle-shock
				tests in the same phase.`,
					cost: 1,
				},
				{
					name: 'FOR THE BLOOD GOD!',
					when: `Fight phase, just after a World
				Eaters unit from your army destroys an
				enemy unit.`,
					target: `That World Eaters unit.`,
					effect: `Make a Blessings of Khorne
				roll. You can use the results of this roll
				to activate one Blessing of Khorne.
				That Blessing of Khorne does not count
				towards your maximum number of
				activated Blessings of Khorne, but all
				other rules for Blessings of Khorne apply.`,
					cost: 1,
				},
				{
					name: 'FOR THE SKULL THRONE!',
					when: `Fight Phase.`,
					target: `One World Eaters unit from
				your army that has not been selected to
				fight this phase.`,
					effect: `Until the end of the phase,
				each time a model in your unit makes a
				melee attack that targets a Character,
				Monster or Vehicle unit, add 1 to the
				Wound roll.`,
					cost: 1,
				},
				{
					name: 'KHORNE CARES NOT…',
					when: `Fight phase, just after an enemy
				unit has selected its targets.`,
					target: `One World Eaters unit from
				your army that was selected as the
				target of one or more of that enemy
				unit's attacks`,
					effect: `Until the end of the phase, each
				time an attack targets your unit, subtract
				1 from the Damage characteristic of
				that attack.`,
					cost: 2,
				},
				{
					name: 'BLOOD OFFERING',
					when: `Any phase`,
					target: `One World Eaters unit from
				your army that was just destroyed
				while it was within range of an objective
				marker you controlled. You can use this
				Stratagem on that unit even though it was
				just destroyed.`,
					effect: `That objective marker remains
				under your control, even if you have
				no models within range of it, until your
				opponent controls it at the start or end of
				any turn.`,
					cost: 1,
				},
				{
					name: 'APOPLECTIC FRENZY',
					when: `Your Movement phase.`,
					target: `One World Eaters unit from
				your army that has not been selected to
				move this phase.`,
					effect: `Until the end of the phase, if your
				unit Advances, do not make an Advance
				roll for it. Instead, until the end of the
				phase, add 6" to the Move characteristic
				of models in your unit.`,
					cost: 1,
				},
			]
		},
		xenos_tyranids: {
			army_rules: [
				{
					name: `SYNAPSE`,
					description: `If your Army Faction is Tyranids, while a Tyranids unit from your army is within 6" of one or more Synapse models from your army, that unit is said to be within Synapse Range of your army. Each time a Tyranids unit from your army takes a Battle-shock test, if it is within Synapse Range of your army, take that test on 3D6 instead of 2D6.`
				},
				{
					name: `SHADOW IN THE WARP`,
					description: `If your Army Faction is Tyranids, once per battle, in either player\'s Command phase, if one or more units from your army with this ability are on the battlefield, you can unleash the Shadow in the Warp. When you do, each enemy unit on the battlefield must take a Battle-shock test.`
				},
			],
			detachment_rules: [{
				name: `HYPER-ADAPTATIONS`,
				description: `At the start of the first battle round, select one of the following Hyper-adaptations to be active for Tyranids units from your army until the end of the battle: 
				
				SWARMING INSTINCTS
				Each time a Tyranids model with this Hyper-adaptation makes an attack that targets an enemy Infantry or Swarm unit, that attack has the [SUSTAINED HITS 1] ability.
				
				HYPER-AGGRESSION
				Each time a Tyranids model with this Hyper-adaptation makes an attack that targets an enemy Monster or Vehicle unit, that attack has the [LETHAL HITS] ability.
				
				HIVE PREDATORS
				Each time a Tyranids model with this Hyper-adaptation makes an attack that targets an enemy Character unit, if a Critical Hit is scored, that attack has the [PRECISION] ability.`
			}],
			stratagems: [
				{
					name: 'RAPID REGENERATION',
					when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit 	has selected its targets.',
					target: 'One Tyranids unit from your army that was selected as the target of one or more of the attacking unit\'s attacks',
					effect: 'Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within Synapse Range of your army, until the end of the phase, models in your unit have the Feel No Pain 5+ ability instead.',
					cost: 1,
				},
				{
					name: 'ADRENAL SURGE',
					when: 'Fight phase.',
					target: 'Up to two Tyranids units from your army that are within Synapse Range of your army and are eligible to fight, or one other Tyranids unit from your army that is eligible to fight',
					effect: 'Until the end of the phase, each time a model in one of those selected units makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.',
					cost: 2,
				},
				{
					name: 'DEATH FRENZY',
					when: 'Fight phase, just after an enemy unit has selected its targets.',
					target: 'One Tyranids unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
					effect: 'Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model\'s unit has finished making attacks, and is then removed from play',
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
		aeldari_craftworlds: {
			army_rules: [
				{
					name: `STRANDS OF FATE`,
					description: `
					If your army faction is aeldari, at the start of the battle, make a strands of fate roll by rolling twelve d6. 

					If you wish, you can then re-roll all of these dice, but if you do, roll one less d6. You can continue re-rolling all of the dice in this manner, rolling one less d6 each time you do, until you are satisfied with the results rolled (or until you only have a single d6 remaining). 

					When you are satisfied with the results rolled, those remaining dice become your fate dice for the battle. These results cannot be changed or re-rolled further, unless a rule specifically states otherwise. Keep your fate dice to one side  this is your fate dice pool. 

					Once per phase, before making a dice roll for a model or unit from your army with the strands of fate ability, if you have one or more dice in your fate dice pool, you can use one of those fate dice. To do so, select one of those fate dice to substitute that dice roll. The dice that is being substituted is not rolled; instead, the value of the selected fate dice is used as if it had been rolled (this counts as an unmodified dice roll of that value for all rules purposes). Each fate dice can only be used in this way once. After using a fate dice, remove it from your fate dice pool and roll all remaining dice that are part of that dice roll (if any). 

					You can use Fate dice for any of the following types of dice roll:

					■ Advance roll
					■ Battle-shock test
					■ Charge roll
					■ Damage roll
					■ Hit roll
					■ Saving throw
					■ Wound roll
					`
				},
			],
			detachment_rules: [{
				name: `UNPARALLELED FORESIGHT`,
				description: `Each time an Aeldari unit from your army is selected to shoot or fight, you can re-roll one Hit roll and you can re-roll one Wound roll when resolving those attacks.`
			}],
			stratagems: [
				{
					name: 'FEIGNED RETREAT',
					when: 'Your Movement phase, just after an Aeldari unit from your army makes a Fall Back move.',
					target: 'That Aeldari unit.',
					effect: 'Your unit is eligible to shoot and declare a charge this turn even though it Fell Back.',
					cost: 1,
				},
				{
					name: 'MATCHLESS AGILITY',
					when: 'Your Movement phase.',
					target: 'One Aeldari unit from your army that has not been selected to move this phase.',
					effect: 'Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
					cost: 1,
				},
				{
					name: 'FIRE AND FADE',
					when: 'End of your Shooting phase.',
					target: 'One Aeldari unit from your army.',
					effect: 'Your unit can make a Normal move. It cannot embark within a Transport at the end of this move.',
					restrictions: 'You cannot select an Aircraft unit or a unit within Engagement Range of one or more enemy units, and until the end of the turn, the unit you selected is not eligible to declare a charge.',
					cost: 2,
				},
				{
					name: 'BLADESTORM',
					when: 'Your Shooting phase.',
					target: 'One Aeldari unit from your army that has not been selected to shoot this phase.',
					effect: 'Until the end of the phase, each time a model in your unit makes an attack, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 2.',
					cost: 1,
				},
				{
					name: 'PHANTASM',
					when: 'End of your opponent\'s Movement phase.',
					target: 'One Aeldari unit from your army (excluding Aircraft).',
					effect: 'Your unit can make a Normal move of up to 7". It cannot embark within a Transport at the end of this move.',
					restrictions: 'You cannot select a unit within Engagement Range of one or more enemy units, and until the end of the turn, you cannot target that unit with the Heroic Intervention Stratagem.',
					cost: 1,
				},
				{
					name: 'LIGHTNING-FAST REACTIONS',
					when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
					target: 'One Aeldari unit from your army (excluding Wraith Construct units) that was selected as the target of one or more of the attacking unit\'s attacks.',
					effect: 'Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.',
					cost: 1,
				},

			]
		},
	};

	static get(armyName) {
		return HardcodeArmyRules.data[armyName.toLowerCase().replace(/- /g, '').replace(/ /g, '_')];
	}
};
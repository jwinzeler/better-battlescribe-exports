const xenos_tyranids = {
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
  detachments: {
    invasion_fleet: {
      rules: [{
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
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit 	has selected its targets.',
          target: 'One Tyranids unit from your army that was selected as the target of one or more of the attacking unit\'s attacks',
          effect: 'Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within Synapse Range of your army, until the end of the phase, models in your unit have the Feel No Pain 5+ ability instead.',
          cost: 1,
        },
        {
          name: 'ADRENAL SURGE',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Fight phase.',
          target: 'Up to two Tyranids units from your army that are within Synapse Range of your army and are eligible to fight, or one other Tyranids unit from your army that is eligible to fight',
          effect: 'Until the end of the phase, each time a model in one of those selected units makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.',
          cost: 2,
        },
        {
          name: 'DEATH FRENZY',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Fight phase, just after an enemy unit has selected its targets.',
          target: 'One Tyranids unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
          effect: 'Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model\'s unit has finished making attacks, and is then removed from play',
          cost: 1,
        },
        {
          name: 'OVERRUN',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Fight phase, just before a Tyranids unit from your army Consolidates.',
          target: 'That Tyranids unit.',
          effect: 'Until the end of the phase, each time a model in your unit makes a Consolidation move, it can move up to 6" instead of up to 3", provided your unit can end its Consolidation move in Unit Coherency and within Engagement Range of one or more enemy units. If your unit is within Synapse Range of your army and not within Engagement Range of any enemy units, instead of making that Consolidation move, it can instead make a Normal move of up to 6".',
          cost: 1,
        },
        {
          name: 'SYNAPTIC INSIGHT',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Command phase',
          target: 'Up to two Tyranids units from your army that are within Synapse Range of your army, or one other Tyranids unit from your army.',
          effect: 'Select one Hyper-adaptation. Until the end of the battle round, that hyper-adaptation is active for those selected units in addition to any other that may be active for your army.',
          restrictions: 'You cannot select the same hyper-adaptation you selected at the start of the first battle round.',
          cost: 1,
        },
        {
          name: 'ENDLESS SWARM',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Command phase.',
          target: 'Up to two Endless Multitude units from your army that are within Synapse Range of your army, or one other Endless Multitude unit from your army.',
          effect: 'Up to D3+3 destroyed models are returned to each of the selected units.',
          cost: 1,
        },
      ],
    },
    crusher_stampede: {
      rules: [{
        name: `ENRAGED BEHEMOTHS`,
        description: `Each time a TYRANIDS MONSTER model from your army makes an attack, add 1 to the Hit roll if that model's unit is below its Starting Strength, and add 1 to the Wound roll as well if that model's unit is Below Half-strength`,
      }],
      stratagems: [
        {
          name: 'CORROSIVE VISCERA',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Your opponent\'s Shooting phase or the Fight phase, just after a TYRANIDS MONSTER model from your army with the Deadly Demise ability that cannot FLY is destroyed.',
          target: 'That TYRANIDS MONSTER model. You can use this Stratagem on that model even though it was just destroyed.',
          effect: 'Do not roll one D6 to determine whether mortal wounds are inflicted by your model\'s Deadly Demise ability. Instead, mortal wounds are automatically inflicted.',
          cost: 1,
        },
        {
          name: 'RAMPAGING MONSTROSITIES',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Fight phase.',
          target: 'One TYRANID MONSTER unit from your army that has not been selected to fight this phase.',
          effect: 'Until the end of the phase, each time a model in your unit makes an attack, yo ucan re-roll the Hit roll.',
          cost: 1,
        },
        {
          name: 'SAVAGE ROAR',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Fight phase, just after an enemy unit has selected its targets.',
          target: 'One TYRANID MONSTER unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
          effect: 'That enemy unit must take a Battle-shock test and, until the end of the phase, each time a model in that enemy unit makes an attack that targets your unit, subtract 1 from the Hit roll. If that Battle-shock test was failed, subtract 1 from the Wound roll as well.',
          cost: 1,
        },
        {
          name: 'UNTRAMMELED FEROCITY',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Movement phase.',
          target: 'One TYRANID MONSTER unit from your army that has not been selected to move this phase.',
          effect: 'Until the end of the phase, models in your unit can move through enemy models as if they were friendly models, and until the end of the phase any Desperate Escape tests those models must take are automatically passed.',
          cost: 1,
        },
        {
          name: 'SWARM-GUIDED SALVOES',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.your,
          when: 'Your Shooting phase.',
          target: 'One TYRANID MONSTER unit from your army that has not been selected to shoot this phase.',
          effect: 'Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability, and until the end of the phase each time a model in your unit makes an attack, you can ignore any or all modifiers to taht model\'s Ballistic Skill characteristic and any of all modifiers to the Hit roll.',
          cost: 1,
        },
        {
          name: 'MASSIVE IMPACT',
          type: stratagem_types.epic_deed,
          turn: stratagem_turn.your,
          when: 'Your Charge phase, just after a TYRANIDS MONSTER model from your army ends a Charge move.',
          target: 'That TYRANIDS MONSTER model.',
          effect: 'Select one enemy unit within Engagement Range of your model and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.',
          cost: 1,
        },
      ],
    },
    unending_swarm: {
      rules: [{
        name: `INSURMOUNTABLE ODDS`,
        description: `
        Each time an enemy unit is selected to shoot, after that unit has finished making its attacks, if one or more models from one or more ENDLESS MULTITUDE units from your army were destroyed as a result of those attacks, each such unit can make a Surge move.
        
        To do so, roll one D6: thatt unit can be moved a distance in inches up to the result, but that unit must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT).

        When doing so, those models can be moved within Engagement Range of enemy units. A unit cannot make a Surge move while it is Battle-shocked.
        `,
      }],
      stratagems: [
        {
          name: 'SYNAPTIC GOADING',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Any phase, just before an ENDLESS MULTITIDE unit from your army that is within Synapse Range of your army makes a Surge move.',
          target: 'That ENDLESS MULTITUDE unit.',
          effect: 'When making that Surge move, you can re-roll the D6 to determine how far your unit moves, and your unit can end that move as close as possible to the closest objective marker (instead of as close as possible to the closest enemy unit). All other rules for making Surge moves still apply.',
          cost: 1,
        },
        {
          name: 'UNENDING WAVES',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Any phase.',
          target: 'One ENDLESS MULTITUDE unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.',
          effect: 'Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength.',
          restrictions: 'Any destroyed CHARACTER units that were attached to your unit are not returned.',
          cost: 2,
        },
        {
          name: 'TEEMING MASSES',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
          target: 'One ENDLESS MULTITUDE unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
          effect: 'Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.',
          cost: 1,
        },
        {
          name: 'SWARMING MASSES',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Your Shooting phase or the Fight phase.',
          target: 'One ENDLESS MULTITUDE unit from your army that has not been selected to shoot or fight this phase.',
          effect: 'Until the end of the pahse, weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability, and if your unit contains 15 or more models, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.',
          cost: 1,
        },
        {
          name: 'BOUNDING ADVANCE',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.your,
          when: 'Your Movement phase.',
          target: 'One ENDLESS MULTITUDE unit from your army.',
          effect: 'Until the end of the phase, each time your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
          cost: 1,
        },
        {
          name: 'PRESERVATION IMPERATIVE',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.opponent,
          when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
          target: 'One ENDLESS MULTITUDE unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
          effect: 'Until the end of the phase, your unit is treated as containing fewer than five models for the purpose of the [BLAST] ability.',
          cost: 1,
        },
      ],
    },
    assimilation_swarm: {
      rules: [{
        name: `FEED THE SWARM`,
        description: `
        In your Command phase, each HARVESTER unit from your army that is within range of an objective marker you control can Regenerate one friendly TYRANIDS unit that is within 6" of it. A unit can only be regenerated once per phase. Each time a unit regenerates, do one of the following:

        - One mode in that unit regains up to D3 lost wounds.
        
        - One destroyed INFANTRY model (excluding CHARACTERS) is returned to that unit with its full wounds remaining. If that unit is an ENDLESS MULTITUDE unit, up to 3 destroyed models are returned instead.
        `,
      }],
      stratagems: [
        {
          name: 'BROODGUARD IMPULSE',
          type: stratagem_types.epic_deed,
          turn: stratagem_turn.both,
          when: 'Any phase.',
          target: 'One HARVESTER unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.',
          effect: 'Until the end of the battle, each time a friendly TYRANIDS model makes an attack that targets the enemy unit that just destroyed your HARVESTER unit, add 1 to the Wound roll.',
          cost: 1,
        },
        {
          name: 'RECLAIM BIOMASS',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Any phase, when a TYRANIDS unit from your army is destroyed, before the last model in it is removed from play.',
          target: 'One HARVESTER unit from your army that is within 6" of that destroyed unit.',
          effect: 'Regenerate one friendly TYRANIDS unit within 6" of your HARVESTER unit (See Feed the Swarm).',
          cost: 1,
        },
        {
          name: 'TYRANNOFORMED',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Command phase.',
          target: 'One HARVESTER unit from your army that is within range of an objective marker you control.',
          effect: 'That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.',
          cost: 1,
        },
        {
          name: 'ABLATIVE CARAPACE',
          type: stratagem_types.epic_deed,
          turn: stratagem_turn.both,
          when: 'Your oppponent\'s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
          target: 'One HARVESTER unit from your army that was selected as the target of one or more of the attacking unit\s attacks.',
          effect: 'Until the end of the pahse, models in your unti have the Fell No Pain 5+ ability. If your unit is within range of an objective marker you control, until the end of the phase models in your unit have the Feel No Pain 4+ ability instead.',
          cost: 2,
        },
        {
          name: 'SECURE BIOMASS',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Fight phase.',
          target: 'One TYRANIDS unit from your army that has not been selected to fight this phase.',
          effect: 'Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If your unit is a HARVESTER unit, each time a model in that unit makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit as well.',
          cost: 1,
        },
        {
          name: 'RAPACIOUS HUNGER',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.your,
          when: 'Your Fight phase.',
          target: 'One TYRANIDS unit from your army that just destroyed an enemy unit.',
          effect: 'Your unit immediately Regenerates (See Feed the Swarm). When doing so, if your unit is a HARVESTER unit and you choose for one model to regain up to D3 lost wounds, that models regains up to 3 lost wounds instead.',
          cost: 1,
        },
      ],
    },
    assimilation_swarm: {
      rules: [
        {
          name: `QUESTION TENDRILS`,
          description: `
            TYRANIDS units with this ability are eligible to charge in a turn in which they Fell Back. VANGUARD INVADER units with this ability are eligible to charge in a turn in which they Advanced.
          `,
        },
        {
          name: `VANGUARD PRIME`,
          description: `
            DEATHLEAPER loses the Hunter Organism rule and can be your WARLORD.
          `,
        }
      ],
      stratagems: [
        {
          name: 'SURPRISE ASSAULT',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Your Shooting pahse or the Fight phase.',
          target: 'One VANGUARD INVADER unit from your army that has not been selected to shoot or fight this phase, and one enemy unit.',
          effect: 'That enemy unit must make a Battle-shock test. Until the end of the phase, each time a model in your unit makes an attack that targets that enemy unit, add 1 to the Hit roll. If the Battle-shock test was failed, add 1 to the Wound roll as well.',
          cost: 1,
        },
        {
          name: 'ASSASSIN BEASTS',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Fight phase.',
          target: 'One VANGUARD INVADER INFANTRY unit from your army that has not been selected to fight this phase.',
          effect: 'Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.',
          cost: 1,
        },
        {
          name: 'SEEDED BROODS',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Movement phase.',
          target: 'One TYRANIDS unit from your army that is in Reserves, or up to two VANGUARD INVADER units from your army that are in Reserves.',
          effect: 'Until the end of the phase, for the purposes of setting up those selected units on the battlefield, treat the current battle round number as being one higher than it actually is.',
          cost: 1,
        },
        {
          name: 'HYPERSENSORY SCILLA',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.opponent,
          when: 'Your opponent\'s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.',
          target: 'Up to two VANGUARD INVADER units from your army that are within 9" of that enemy unit, or one other TYRANIDS INFANTRY unit from your army that is within 9" of that enemy unit.',
          effect: 'Those selected units can each make a Normal move of up to 6".',
          restrictions: 'You cannot target units that are within Engagement Range of one or more enemy units.',
          cost: 2,
        },
        {
          name: 'UNSEEN LURKERs',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.opponent,
          when: 'Your opponent\'s Shooting phase, just after an enemy unit has selected its targets.',
          target: 'One VANGUARD INVADER unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
          effect: 'Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 12" or, if your unit has the Lone Operative ability, if the attacking model is whithin 6". Your opponent can select new targets for the attacking unit\'s attacks.',
          cost: 1,
        },
        {
          name: 'INVISIBLE HUNTER',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.opponent,
          when: 'End of your opponent\'s Fight phase.',
          target: 'Up to two VANGUARD INVADER units from your army, or one TYRANIDS INFANTRY unit from your army.',
          effect: 'Remove the targeted units from the battlefield and place them into Strategic Reserves.',
          restrictions: 'The targeted units must be more than 3" away from all enemy units.',
          cost: 1,
        },
      ],
    },
    synaptic_nexus: {
      rules: [{
        name: `SYNAPTIC IMPERATIVES`,
        description: `
        At the start of the battle round, you can select one of the Synaptic Imperatives shown below. Until the ne dof the battle round, that Synaptic Imperative is active for your army and while a TYRANIDS unit from your army is within Synapse Range fo your army, it will benefit from it. Each Synaptic Imperative can only be selected once per battle.

        - SYNAPTIC AUGMENTATION: While this unit is within Synapse Rangge of your army, models in this unit have a 5+ invulnerable save.

        - SURGING VITALITY: While this unit is within Syanpse Range of your army, add 1 to Advance and Charge rolls made for this unit.

        - GOADED TO SLAUGHTER: While this unit is within Synapse Range of your army, each time a model in this unit makes a melee attack, add 1 to the Hit roll.
        `,
      }],
      stratagems: [
        {
          name: 'THE SMOTHERING SHADOW',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: 'Any phase, just after an enemy unit fails a Battle-shock test.',
          target: 'One SYNAPSE unit from your army within 12" of that enemy unit.',
          effect: 'Roll six D6: for each 3+, that enemy unit suffers 1 mortal wound.',
          cost: 1,
        },
        {
          name: 'SYNAPTIC CHANNELLING',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Command phase.',
          target: 'One SYNAPSE unit from your army.',
          effect: 'Until the end of the turn, while a friendly TYRANIDS unit is within 9" of the selected unit, that unit is within Synapse Range of your army.',
          cost: 1,
        },
        {
          name: 'IRRESISTIBLE WILL',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Your Shooting phase or the Fight phase.',
          target: 'One SYNAPSE unit from your army that has not been selected to shoot or fight this phase, and one enemy unit within 24" of and visible to the SYNAPSE unit.',
          effect: 'Until the end of the phase, each time a friendly TYRANIDS model makes an attack that targets that enemy unit, if the attacking model\'s unit is within 6" of your SYNAPSE unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.',
          cost: 1,
        },
        {
          name: 'REINFORCED HIVE NODE',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
          target: 'One SYNPASE unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
          effect: 'Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.',
          cost: 1,
        },
        {
          name: 'IMPERATIVE DOMINANCE',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Command phase.',
          target: 'One TYRANIDS unit from your army that is within Synapse Range of your army.',
          effect: 'Select one Synaptic Imperative, even if you have already selected that imperative this battle. Until the start of your next Command phase, that Synaptic Imperative is active for your unit instead of any other Synaptic Imperative that is active for your army.',
          cost: 1,
        },
        {
          name: 'OVERRIDE INSTINCTS',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Movement phase.',
          target: 'One TYRANIDS unit from your army that is within Synapse Range of your army and made a Fall Back move this phase.',
          effect: 'Your unit is eligible to shoot and declare a charge this turn.',
          cost: 1,
        },
      ],
    }
  },
};
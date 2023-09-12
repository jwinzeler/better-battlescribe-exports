const imperium_adeptus_astartes_deathwatch = {
  army_rules: [{
    name: `KILL TEAMS`,
    description: `Each time an attack targets a Kill Team unit from your army that contains models with different Toughness characteristics, until the attacking unit has finished making its attacks, use the Toughness characteristic of the majority of the models in that unit when determining what roll is required for that attack to successfully wound. If two or more Toughness characteristics are tied for majority, use the highest value. For the purposes of determining which models can embark within a Transport model, Kill Team Terminator models, Kill Team Outrider models, Kill Team Biker models and models equipped with a jump pack each take up the space of 2 models, but can otherwise embark within any Transport their unit can embark within, even though similar models in other units may have the Terminator, Mounted or Jump Pack keywords. For the purposes of interacting with terrain features, all models in units with the Kill Team ability are treated as Infantry, even though similar models in other units may have the Mounted or Jump Pack keywords.`
  },
  {
    name: `OATH OF MOMENT`,
    description: `If your Army Faction is Adeptus Astartes, at the start of your Command phase, select one unit from your opponent\'s army. Until the start of your next Command phase, each time a model from your army with this ability makes an attack that targets that enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll`
  }],
  detachments: {
    black_spear_task_force_mission_tactics: {   
      rules: [{
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
        type: stratagem_types.battle_tactic,
        turn: stratagem_turn.both,
        when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
        target: 'One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit\'s attacks.',
        effect: 'Until the end of the phase, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.',
        cost: 1,
      },
      {
        name: 'TELEPORTARIUM',
        type: stratagem_types.strategic_ploy,
        turn: stratagem_turn.opponent,
        when: 'End of your opponent\'s Fight phase.',
        target: 'Up to two Kill Team units from your army, or one other Adeptus Astartes Infantry unit from your army',
        effect: 'Remove those units from the battlefield. In the Reinforcements step of your next Movement phase, set each of those units up anywhere on the battlefield that is more than 9" horizontally away from all enemy models.',
        restrictions: 'You cannot select any units that are within Engagement Range of one or more enemy units.',
        cost: 1,
      },
      {
        name: 'ADAPTIVE TACTICS',
        type: stratagem_types.strategic_ploy,
        turn: stratagem_turn.your,
        when: 'Your Command phase',
        target: 'Up to two Kill Team units from your army, or one other Adeptus Astartes unit your army',
        effect: 'For each unit targeted, select the Furor Tactics, Malleus Tactics or Purgatus Tactics. Until the start of your next Command phase, that Mission Tactic is active for that unit instead of any Mission Tactic that is active for your army.',
        cost: 1,
      },
      {
        name: 'HELLFIRE ROUNDS',
        type: stratagem_types.wargear,
        turn: stratagem_turn.your,
        when: 'Your Shooting phase.',
        target: 'Up to two Kill Team units from your army that have not been selected to shoot this phase, or one other Adeptus Astartes unit from your army (excluding Vehicles) that has not been selected to shoot this phase.',
        effect: 'Until the end of the phase, ranged weapons (excluding Devastating Wounds weapons) equipped by models in your unit have the [ANTI-INFANTRY 2+] and [ANTI-MONSTER 5+] abilities.',
        restrictions: 'You cannot select any units that have already been targeted with either the Kraken Rounds or Dragonfire Rounds Stratagems this phase.',
        cost: 1,
      },
      {
        name: 'KRAKEN ROUNDS',
        type: stratagem_types.wargear,
        turn: stratagem_turn.your,
        when: 'Your Shooting phase',
        target: 'Up to two Kill Team units from your army that have not been selected to shoot this phase, or one other Adeptus Astartes unit from your army (excluding Vehicles) that has not been selected to shoot this phase',
        effect: 'Until the end of the phase, improve the Armour Penetration characteristic of ranged weapons equipped by models in your unit by 1 and improve the range characteristic of those weapons by 6".',
        restrictions: 'You cannot select any units that have already been targeted with either the Dragonfire Rounds or Hellfire Rounds Stratagems this phase.',
        cost: 1,
      },
      {
        name: 'DRAGONFIRE ROUNDS',
        type: stratagem_types.wargear,
        turn: stratagem_turn.your,
        when: 'Your Shooting phase.',
        target: 'Up to two Kill Team units from your army that have not been selected to shoot this phase, or one other Adeptus Astartes unit from your army (excluding Vehicles) that has not been selected to shoot this phase',
        effect: 'Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] and [IGNORES COVER] abilities.',
        restrictions: 'You cannot select any units that have already been targeted with either the Kraken Rounds or Hellfire Rounds Stratagems this phase.',
        cost: 1,
      },
      ],
    },
  },
};
const xenos_tau_empire = {
  army_rules: [
    {
      name: `FOR THE GREATER GOOD`,
      description: `
      If your Army Faction is T'au Empire, then in your Shooting phase units from your army can work in	pairs to help each other target specific enemy units. When they do this, one unit is the Observer unit and the other is their Guided unit. The enemy they are	targeting is called their Spotted unit.

      Each time you select this unit to shoot, if it is not an Observer unit, it can use this ability. If it does, select	one other friendly unit with this ability that is also eligible to shoot (excluding Fortification, Battleshocked and Observer units). Until the end of the phase, this unit is considered a Guided unit, and that friendly unit is considered an Observer unit. Then select one enemy unit that is visible to both your units to be their Spotted unit.

      Until the end of the phase:

      - Each time a model in a Guided unit makes an attack that targets their Spotted unit, improve the Ballistic Skill characteristic of	the attack by 1 and, if their Observer unit	has the Markerlight keyword, the attack
      has the [IGNORES COVER] ability.

      - Each time a model in a Guided unit makes an	attack that does not target their Spotted unit,	worsen the Ballistic Skill characteristic of the attack	by 1.
      `
    },
  ],
  detachments: {
    kauyon: {
      rules: [
        {
          name: `KAUYON`,
          description: `
          From the third battle round onwards, all ranged weapons equipped by T'au Empire models from your army have the [SUSTAINED HITS 1] ability. While a unit is a Guided unit (see For the Greater Good), weapons in that unit have the [SUSTAINED HITS 2] ability instead.
          `
        }
      ],
      stratagems: [
        {
          name: 'STIMM INJECTORS',
          type: stratagem_types.wargear,
          turn: stratagem_turn.both,
          when: 'Fight phase or your opponent\'s Shooting phase, just after an enemy unit has selected its targets.',
          target: 'One T\'au Empire Battlesuit unit from your army that was selected as the target of one or more of the attacking	unit\'s attacks',
          effect: 'Until the end of the phase, models in your unit have the Feel No Pain 6+ ability',
          cost: 1,
        },
        {
          name: 'STRIKE AND FADE',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Shooting phase.',
          target: 'One T\'au Empire Battlesuit	unit from your army that can Fly whose attacks have been resolved this phase.',
          effect: 'If your unit is not within Engagement Range of any enemy units, it can make a Normal move. If it does, your unit cannot declare a charge this turn.',
          cost: 2,
        },
        {
          name: 'COORDINATE TO ENGAGE',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.your,
          when: 'Your Shooting phase.',
          target: 'One T\'au Empire unit from your army that has just been selected as an Observer unit (see For the Greater Good).',
          effect: 'Until the end of the phase, each time a model in your unit makes an attack that targets their Spotted unit, improve the Ballistic Skill characteristic of that attack by 1 and, if your unit has the Markerlight keyword, that attack has the [IGNORES COVER] ability.',
          cost: 1,
        },
        {
          name: 'POINT-BLANK AMBUSH',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.your,
          when: 'Your Shooting phase.',
          target: 'One T\'au Empire unit from your army that has not been selected to shoot this phase.',
          effect: 'Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within 9", improve the Armour Penetration characteristic of that attack by 1.',
          cost: 1,
        },
        {
          name: 'PHOTON GRENADES',
          type: stratagem_types.wargear,
          turn: stratagem_turn.opponent,
          when: 'Your opponent\'s Charge phase, just after an enemy unit has declared a charge.',
          target: 'One T\'au Empire Grenades unit from your army that was selected as one of the targets of that charge.',
          effect: 'That enemy unit must immediately take a Battle-shock test, and until the end of the phase, subtract 2 from Charge rolls made for that enemy unit.',
          cost: 1,
        },
        {
          name: 'COMBAT EMBARKATION',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.opponent,
          when: 'Your opponent\'s Charge phase, just after an enemy unit has declared a charge.',
          target: 'One T\'au Empire Infantry unit from your army that was selected as one of the targets of that charge, and one friendly Transport.',
          effect: 'Your unit can embark within that Transport. If it does, your opponent can select new targets for that charge.',
          restrictions: 'Every model in your T\'au Empire Infantry unit must be within 3" of that Transport and there must be sufficient transport capacity to embark the entire unit.',
          cost: 1,
        },
      ],
    },
  },
};
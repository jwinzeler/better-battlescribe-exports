const xenos_leagues_of_votann = {
  army_rules: [{
    name: `EYE OF THE ANCESTORS`,
    description: `If your Army Faction is LEAGUES OF VOTANN, each time an enemy unit destroys a LEAGUES OF VOTANN unit from your army, that enemy unit gains 1 Judgement token. An enemy unit can never have more than 2 Judgement tokens (any further Judgement tokens a unit would gain beyond this are ignored).
Each time a model from your army with this ability makes an attack that targets a unit that has one or more Judgement tokens, until that model\’s attacks have been resolved, apply the relevant bonus from the table below to that attack.
1 Jodgement token - Eminent Threat: Add 1 to the Hit roll
2 Judgement tokens - Now We’ve Got a Grudge to Settle: Add 1 to the Hit roll and add 1 to the Wound roll.`
  }],
  detachments: {
    oathband_mission_tactics: {   
      rules: [{
        name: `RUTHLESS EFFICIENCY`,
        description: `At the start of the battle, select a number of units from your opponent\’s army depending on the battle size, as shown below:
- Incursion: 2 units
- Strike Force: 4 units
- Onslaught: 6 units
Each of those units start the battle with 2 Judgement tokens (see Eye of the Ancestors). If, at the start of any of your Command phases, any of those units have been destroyed, you gain a number of CP depending on how early in the battle you destroyed it, as shown below (you can only gain CP in this way once per battle, and CP gained in this way are an exemption to the Core Rules that limit the maximum number of CP you can gain per battle round to 1).
-Unit destroyed by the start of your first or second Command phase: 3CP
-Unit destroyed by the start of your third or fourth Command phase: 2CP
-Unit destroyed by the start of your fifth Command phase: 1CP`
      }],
      stratagems: [{
        name: 'WARRIOR PRIDE',
        type: stratagem_types.battle_tactic,
        turn: stratagem_turn.both,
        when: 'Fight phase.',
        target: 'One Leagues of Votann unit from your army, and one enemy unit that has one or more Judgement tokens and is within Engagement Range of that Leagues of Votann unit.',
        effect: 'Until the end of the phase, each time a model in your unit makes a melee attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1 for each Judgement token that enemy unit has.',
        cost: 1,
      },
      {
        name: 'ANCESTRAL SENTENCE',
        type: stratagem_types.battle_tactic,
        turn: stratagem_turn.your,
        when: 'Your Shooting phase.',
        target: 'One Leagues of Votann unit from your army.',
        effect: 'Until the end of the phase, each time a model in your unit makes a ranged attack, that attack has the [SUSTAINED HITS 1] ability, and each time a model in your unit makes a ranged attack that targets a unit that has one or more Judgement tokens, that attack has the [SUSTAINED HITS 2] ability instead.',
        cost: 1,
      },
      {
        name: 'ORDERED RETREAT',
        type: stratagem_types.strategic_ploy,
        turn: stratagem_turn.your,
        when: 'Your Movement phase, just after a Leagues of Votann unit from your army Falls Back.',
        target: 'That Leagues of Votann unit',
        effect: 'Until the end of the turn, your unit is eligible to shoot and declare a charge',
        cost: 1,
      },
      {
        name: 'REACTIVE REPRISAL',
        type: stratagem_types.battle_tactic,
        turn: stratagem_turn.opponent,
        when: 'Your opponent\’s Shooting phase, just after an enemy unit that has one or more Judgement tokens has resolved its attacks.',
        target: 'One Leagues of Votann unit from your army that was selected as the target of one or more of the attacking unit\’s attacks',
        effect: 'Your Leagues of Votann unit can shoot as if it were your Shooting phase, but it must target the enemy unit that just attacked it, and can only do so if that enemy unit is an eligible target.',
        cost: 2,
      },
      {
        name: 'NEWFOUND NEMESIS',
        type: stratagem_types.strategic_ploy,
        turn: stratagem_turn.opponent,
        when: 'Your opponent\’s Shooting phase or the Fight phase, just after an enemy unit has resolved its attacks.',
        target: 'One Leagues of Votann Infantry or Leagues of Votann Mounted unit from your army that was reduced to Below Half-strength as a result of the attacking unit\’s attacks.',
        effect: 'The attacking unit gains 1 Judgement token, or up to 2 Judgement tokens instead if that Leagues of Votann unit contained your Warlord when it was targeted by those attacks.".',
        cost: 1,
      },
      {
        name: 'VOID ARMOUR',
        type: stratagem_types.wargear,
        turn: stratagem_turn.opponent,
        when: 'Your opponent\’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets',
        target: 'One Leagues of Votann unit from your army that was selected as the target of one or more of the attacking unit’s attacks.',
        effect: 'Until the end of the phase, each time an attack targets your Leagues of Votann unit, worsen the Armour Penteration characteristic of that attack by 1.',
        cost: 1,
      },
      ],
    },
  },
};

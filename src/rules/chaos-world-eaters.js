const chaos_world_eaters = {
  army_rules: [
    {
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
  detachments: {
    berzerker_warband: {
      rules: [{
        name: `RELENTLESS RAGE - BERZERKER WARBAND`,
        description: `Each time a World Eaters unit from your army is selected to fight, if that unit made a Charge move this turn, until the end of the phase, add 1 to the Strength and Attacks characteristics of melee weapons equipped by models in that unit.`
      }],
      stratagems: [
        {
          name: 'GORY MASSACRE',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
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
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
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
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
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
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
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
          type: stratagem_types.epic_deed,
          turn: stratagem_turn.both,
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
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.your,
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
      ],
    },
  },
};
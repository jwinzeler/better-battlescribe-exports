const imperium_adeptus_mechanicus = {
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
  detachments: {
    "rad-cohort": {
      rules: [{
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
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Fight phase, just after an enemy unit has selected its targets.',
          target: 'One Adeptus Mechanicus unit from your army (excluding Vehicle units) that was selected as the target of one or more of that enemy unit\'s attacks.',
          effect: 'Until the end of the turn, each time an attack is made that targets your unit, subtract 1 from the Wound roll. ',
          cost: 1,
        },
        {
          name: 'LETHAL DOSAGE',
          type: stratagem_types.wargear,
          turn: stratagem_turn.your,
          when: 'Your Shooting phase.',
          target: ' One Adeptus Mechanicus unit from your army that has not been selected to shoot this phase.',
          effect: 'Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit (excluding Vehicle units), add 1 to the Wound roll.',
          cost: 2,
        },
        {
          name: 'EXTINCTION ORDER',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Command phase.',
          target: 'One Tech-Priest model from your army and one objective marker within 24" of that model.',
          effect: 'Roll one D6 for each enemy unit within range of that objective marker. On a 4+, that unit suffers 1 mortal wound and it must take a Battle-shock test.',
          cost: 1,
        },
        {
          name: 'AGGRESSOR IMPERATIVE',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.your,
          when: 'Your Charge phase.',
          target: 'One Skitarii unit from your army that Advanced this turn.',
          effect: 'Until the end of the turn, your unit is eligible to declare a charge even though it Advanced this turn.',
          restrictions: 'You can only use this Stratagem if the Conqueror Imperative is active for your army.',
          cost: 1,
        },
        {
          name: 'VENGEFUL FALLOUT',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.opponent,
          when: 'Your opponent\'s Shooting phase, just after an enemy unit has resolved its attacks',
          target: 'One Adeptus Mechanicus unit from your army that was selected as the target of one or more of that enemy unit\'s attacks',
          effect: ' Your unit can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and it can only do so if that enemy unit is an eligible target. After your unit has finished making these attacks, it is not eligible to shoot again this turn.',
          cost: 1,
        },
        {
          name: 'BULWARK IMPERATIVE',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.opponent,
          when: 'Your opponent\'s Shooting phase, just after an enemy unit has selected its targets.',
          target: 'One Skitarii unit from your army that was selected as the target of one or more of that enemy unit\'s attacks',
          effect: 'Until the end of the turn, models in your unit have a 4+ invulnerable save',
          restrictions: 'You can only use this Stratagem if the Protector Imperative is 	active for your army',
          cost: 1,
        },
      ],
    },
  },
};
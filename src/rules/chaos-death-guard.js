const chaos_death_guard = {
  army_rules: [{
    name: `NURGLE’S GIFT (AURA)`,
    description: `If your Army Faction is DEATH GUARD, while an enemy unit is within CONTAGION RANGE of this unit, subtract 1 from the Toughness characteristic of models in that enemy unit. CONTAGION RANGE changes over the course of the battle, as shown below.

CONTAGION RANGE
1st Battle Round: Contagion Range = 3"
2nd Battle Round: Contagion Range = 6"
3rd Battle Round Onwards: Contagion Range = 9"`
  }],
  detachments: {
    plague_company: {   
      rules: [{	
        name: `RUTHLESS EFFICIENCY`,
        description: `During the Declare Battle Formations step, select one of the Sicknesses below. Until the end of the battle, all units from your army with the Nurgle’s Gift ability gain the selected Sickness.
■ Skullsquirm Blight (Aura): While an enemy unit is within Contagion Range of this unit, worsen the Ballistic Skill and Weapon Skill characteristics of weapons equipped by models in that enemy unit by 1.
■ Rattlejoint Ague (Aura): While an enemy unit is within Contagion Range of this unit, worsen the Save characteristic of models in that enemy unit by 1.
■ Scabrous Soulrot (Aura): While an enemy unit is within Contagion Range of this unit, worsen the Leadership and Objective Control characteristics of models in that enemy unit by 1 (to a minimum of 1).

If you control an objective marker at the end of your Command phase and a Death Guard unit from your army is within range of that objective marker, that objective marker is said to be Infected and remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn. In addition, while an objective marker is Infected and under your control, it has the Nurgle’s Gift ability as if it were a unit from your army (so enemy units within Contagion Range of it will have their characteristics modified).`
      }],
      stratagems: [{
        name: 'FERRIC BLIGHT',
        type: stratagem_types.battle_tactic,
        turn: stratagem_turn.your,
        when: 'Your Shooting phase or the Fight phase.',
        target: 'One Death Guard unit from your army that has not been selected to shoot or fight this phase.',
        effect: 'Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If the target of that attack is within Contagion Range of an Infected objective marker you control and a Critical Wound is scored for that attack, improve the Armour Penetration characteristic of that attack by 2 instead. ',
        cost: 1,
      },
      {
        name: 'DISGUSTINGLY RESILIENT',
        type: stratagem_types.battle_tactic,
        turn: stratagem_turn.both,
        when: 'Fight phase, just after an enemy unit has selected its targets',
        target: 'One Death Guard unit from your army that was selected as the target of one or more of that enemy unit’s attacks',
        effect: 'Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.',
        cost: 2,
      },
      {
        name: 'SANGUOUS FLUX',
        type: stratagem_types.battle_tactic,
        turn: stratagem_turn.both,
        when: 'Fight phase.',
        target: 'One Death Guard unit from your army that has not been selected to fight this phase.',
        effect: 'Until the end of the phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. While your unit is within range of an Infected objective marker you control, those weapons have the [SUSTAINED HITS 2] ability instead.',
        cost: 1,
      },
      {
        name: 'GIFTS OF DECAY',
        type: stratagem_types.epic_deed,
        turn: stratagem_turn.your,
        when: 'Your Command phase',
        target: 'One Death Guard model from your army',
        effect: 'Your model regains up to D3 lost wounds. If your model’s unit is within Contagion Range of an Infected objective marker you control, your model regains up to 3 lost wounds instead.',
        cost: 1,
      },
      {
        name: 'BOILBLIGHT',
        type: stratagem_types.strategic_ploy,
        turn: stratagem_turn.your,
        when: 'Your Shooting phase.',
        target: 'One Death Guard unit from your army, and one enemy unit within Contagion Range of that unit',
        effect: 'Until the end of the phase, each time a weapon equipped by a Death Guard model from your army targets that enemy unit, that weapon has the [HEAVY] and [IGNORES COVER] abilities.',
        cost: 1,
      },
      {
        name: 'CLOUD OF FLIES',
        type: stratagem_types.strategic_ploy,
        turn: stratagem_turn.opponent,
        when: 'Your opponent’s Shooting phase, just after an enemy unit has selected its targets.',
        target: 'One Death Guard unit from your army that was selected as the target of one or more of that enemy unit’s attacks',
        effect: 'Until the end of the phase, your unit has the Stealth ability',
        cost: 1,
      },
      ],
    }	,
  },
};
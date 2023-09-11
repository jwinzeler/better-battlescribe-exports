const aeldari_craftworlds = {
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
  detachments: {
    battle_host: {
      rules: [
        {
          name: `UNPARALLELED FORESIGHT`,
          description: `Each time an Aeldari unit from your army is selected to shoot or fight, you can re-roll one Hit roll and you can re-roll one Wound roll when resolving those attacks.`
        }
      ],
      stratagems: [
        {
          name: 'FEIGNED RETREAT',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Movement phase, just after an Aeldari unit from your army makes a Fall Back move.',
          target: 'That Aeldari unit.',
          effect: 'Your unit is eligible to shoot and declare a charge this turn even though it Fell Back.',
          cost: 1,
        },
        {
          name: 'MATCHLESS AGILITY',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.your,
          when: 'Your Movement phase.',
          target: 'One Aeldari unit from your army that has not been selected to move this phase.',
          effect: 'Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
          cost: 1,
        },
        {
          name: 'FIRE AND FADE',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'End of your Shooting phase.',
          target: 'One Aeldari unit from your army.',
          effect: 'Your unit can make a Normal move. It cannot embark within a Transport at the end of this move.',
          restrictions: 'You cannot select an Aircraft unit or a unit within Engagement Range of one or more enemy units, and until the end of the turn, the unit you selected is not eligible to declare a charge.',
          cost: 2,
        },
        {
          name: 'BLADESTORM',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: 'Your Shooting phase.',
          target: 'One Aeldari unit from your army that has not been selected to shoot this phase.',
          effect: 'Until the end of the phase, each time a model in your unit makes an attack, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 2.',
          cost: 1,
        },
        {
          name: 'PHANTASM',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.opponent,
          when: 'End of your opponent\'s Movement phase.',
          target: 'One Aeldari unit from your army (excluding Aircraft).',
          effect: 'Your unit can make a Normal move of up to 7". It cannot embark within a Transport at the end of this move.',
          restrictions: 'You cannot select a unit within Engagement Range of one or more enemy units, and until the end of the turn, you cannot target that unit with the Heroic Intervention Stratagem.',
          cost: 1,
        },
        {
          name: 'LIGHTNING-FAST REACTIONS',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: 'Your opponent\'s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.',
          target: 'One Aeldari unit from your army (excluding Wraith Construct units) that was selected as the target of one or more of the attacking unit\'s attacks.',
          effect: 'Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.',
          cost: 1,
        },
      ],
    },
  },
};
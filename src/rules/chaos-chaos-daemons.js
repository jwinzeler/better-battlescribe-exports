const chaos_chaos_daemons = {
  detachments: {
    daemonic_incursion: {
      stratagems: [
        {
          name: 'CORRUPT REALSPACE',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.both,
          when: `Start of any Command phase.`,
          target: `One Legiones Daemonica unit from your army that is within range of an objective marker you control`,
          effect: `	That objective marker is said to be Corrupted and remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn. In addition, while an objective marker is Corrupted and under your control, the area of the battlefield within 6" of that objective marker is considered to be within your army\'s Shadow of Chaos.`,
          cost: 1,
        },
        {
          name: 'DRAUGHT OF TERROR',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
          when: `: Your Shooting phase or the Fight phase`,
          target: `One Legiones Daemonica unit from your army that has not been selected to shoot or fight this phase.`,
          effect: `Until the end of the phase,
          improve the Armour Penetration
          characteristic of weapons equipped by
          models in that unit by 1. In addition,
          until the end of the phase, each time
          such a weapon targets a unit that is
          Battle-shocked, you can re-roll the
          Wound roll`,
          cost: 1,
        },
        {
          name: 'WARP SURGE',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: `Your Charge phase`,
          target: `One Legiones Daemonica unit
          from your army that is within your army\'s
          Shadow of Chaos.`,
          effect: `Until the end of the phase, your
          unit is eligible to declare a charge even if it
          Advanced this turn.`,
          cost: 1,
        },
        {
          name: 'DENIZENS OF THE WARP',
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
          when: `Your Movement phase.`,
          target: `One Legiones Daemonica unit
          from your army that is arriving using the
          Deep Strike ability this phase.`,
          effect: `Your unit can be set up anywhere
          on the battlefield that is more than 3"
          horizontally away from all enemy models.`,
          restrictions: `A unit targeted by this
          Stratagem is not eligible to declare a
          charge in the same turn.`,
          cost: 2,
        },
        {
          name: 'THE REALM OF CHAOS',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.opponent,
          when: `End of your opponent\'s turn`,
          target: `Up to two Legiones Daemonica
          units from your army that are within
          your army\'s Shadow of Chaos, or one
          other Legiones Daemonica unit from
          your army`,
          effect: `Remove the targeted units
          from the battlefield and place them into
          Strategic Reserves. They will arrive back
          on the battlefield in the Reinforcements
          step of your next Movement phase using
          the Deep Strike ability.`,
          restrictions: `You cannot target units
          that are within Engagement Range of one
          or more enemy units with this Stratagem.`,
          cost: 1,
        },
        {
          name: 'DAEMONIC INVULNERABILITY',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.opponent,
          when: `Your opponent\'s Shooting phase,
          just after an enemy unit has selected
          its targets.`,
          target: `One Legiones Daemonica unit
          from your army that was selected as
          the target of one or more of that enemy
          unit\'s attacks.`,
          effect: `Until the end of the phase, each
          time an invulnerable saving throw is made
          for a model in your unit, re-roll a saving
          throw of 1.`,
          cost: 1,
        },
      ],
    },
  },
};
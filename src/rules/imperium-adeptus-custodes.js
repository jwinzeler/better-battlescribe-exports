const imperium_adeptus_custodes = {
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
  detachments: {
    shield_host: {
      rules: [{
        name: `SHIELD HOST - AEGIS OF THE EMPEROR`,
        description: `<b>Adeptus Custodes</b> models from your army have the Feel No Pain 4+ ability against mortal wounds.`
      }],
      stratagems: [
        {
          name: 'SLAYERS OF NIGHTMARES',
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
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
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
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
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
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
          type: stratagem_types.battle_tactic,
          turn: stratagem_turn.both,
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
          type: stratagem_types.epic_deed,
          turn: stratagem_turn.your,
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
          type: stratagem_types.strategic_ploy,
          turn: stratagem_turn.your,
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
      ],
    }
  },
};
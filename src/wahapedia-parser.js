class WahapediaParser {
  static factionNameFixer = {
    'Adeptus Astartes': 'Space Marines',
    'Aeldari - Drukhari': 'Drukhari',
    'Chaos - Chaos Space Marines': 'Chaos Space Marines',
  };

  static detachmentNameFixer = {
    'Rad Zone Corps': 'Rad-Zone Corps'
  }
  
  static getArmyRules(factionName, detachmentName) {
    const factionNameFixerKey = Object.keys(this.factionNameFixer).find((key) => factionName.includes(key));
    if (factionNameFixerKey) {
      factionName = this.factionNameFixer[factionNameFixerKey];
    }

    
    const detachmentNameFixerKey = Object.keys(this.detachmentNameFixer).find((key) => detachmentName.includes(key));
    if (detachmentNameFixerKey) {
      detachmentName = this.detachmentNameFixer[detachmentNameFixerKey];
    }

    let faction = Object.values(wahapediaData.factions).find((faction) => factionName === faction[0].name)?.[0];
    if (!faction) {
      faction = Object.values(wahapediaData.factions).find((faction) => factionName.includes(faction[0].name))[0];
    }

    if (!faction) {
      Logger.error('Could not match .rosz faction with wahapedia factions. It may not exist or something went wrong. Please raise an issue here: https://github.com/jwinzeler/better-battlescribe-exports/issues');
    }

    const factionAbilities = wahapediaData.abilities[faction.id];

    if (!factionAbilities?.length) {
      Logger.error('Could not find faction abilities in wahapedia data. They may not exist or something went wrong. Please raise an issue here: https://github.com/jwinzeler/better-battlescribe-exports/issues');
    }

    const detachmentAbilities = Object.values(wahapediaData.detachment_abilities).filter((ability) => ability[0].detachment === detachmentName).map((ability) => ability[0]);

    if (!detachmentAbilities?.length) {
      Logger.error('Could not find detachment abilities in wahapedia data. They may not exist or something went wrong. Please raise an issue here: https://github.com/jwinzeler/better-battlescribe-exports/issues');
    }

    const detachmentStrats = wahapediaData.stratagems[faction.id]?.filter((strat) => strat.detachment === detachmentName);

    if (!detachmentStrats?.length) {
      Logger.error('Could not find detachment strats in wahapedia data. They may not exist or something went wrong. Please raise an issue here: https://github.com/jwinzeler/better-battlescribe-exports/issues');
    }

    const coreStrats = wahapediaData.stratagems[""];

    if (!coreStrats?.length) {
      Logger.error('Could not find core strats in wahapedia data. They may not exist or something went wrong. Please raise an issue here: https://github.com/jwinzeler/better-battlescribe-exports/issues');
    }

    return {
      faction,
      factionAbilities,
      detachmentAbilities,
      detachmentStrats,
      coreStrats,
    }
  }
}
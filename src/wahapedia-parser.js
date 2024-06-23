class WahapediaParser {
  static getArmyRules(factionName, detachmentName) {  
    const faction = Object.values(wahapediaData.factions).find((faction) => factionName.includes(faction[0].name))[0];
    const factionAbilities = wahapediaData.abilities[faction.id];
    const detachmentAbilities = Object.values(wahapediaData.detachment_abilities).filter((ability) => ability[0].detachment === detachmentName).map((ability) => ability[0]);
    const detachmentStrats = wahapediaData.stratagems[faction.id]?.filter((strat) => strat.detachment === detachmentName);
    const coreStrats = wahapediaData.stratagems[""];

    return {
      faction,
      factionAbilities,
      detachmentAbilities,
      detachmentStrats,
      coreStrats,
    }
  }
}
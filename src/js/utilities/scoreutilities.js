export const modifierFunc = (value) => {
  let m = value < 10 ? 1 : 0;
  return parseInt(((value - m) / 2) - 5)
}

export const getModifier = (abilities, field) => {
  switch (field) {
    case 'str':
      return modifierFunc(abilities.strength.value);
    case 'dex':
      return modifierFunc(abilities.dexterity.value);
    case 'con':
      return modifierFunc(abilities.constitution.value);
    case 'int':
      return modifierFunc(abilities.intelligence.value);
    case 'wis':
      return modifierFunc(abilities.wisdom.value);
    case 'cha':
      return modifierFunc(abilities.charisma.value);
    default:
      return 0;
  }
}

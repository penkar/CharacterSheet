import {ATT_DEF_STRING, ATT_DEF_INT, CHAR_NAME_STRING, CHAR_NAME_INT, BIO_STRING, BIO_INT, } from '../constants'

export const change = ({field, value}) => {
  let type
  if('level' === field || 'experiencePoints' === field || 'dciNumber' === field) {
    type = CHAR_NAME_INT;
    value = value.replace(/\D/, '');
  } else if ('class' === field || 'background' === field || 'race' === field || 'alignment' === field || 'playerName' === field || 'faction' === field || 'characterName' === field || 'age' === field || 'height' === field || 'weight' === field || 'eyes' === field || 'skin' === field || 'hair' === field) {
    type = CHAR_NAME_STRING;
  } else if ('cp' === field || 'sp' === field || 'ep' === field || 'gp' === field || 'pp' === field) {
    type = BIO_INT;
    value = value.replace(/\D/, '');
  } else if ('allies' === field || 'personalityTraits' === field || 'ideals' === field || 'bonds' === field || 'flaws' === field || 'attacksAndSpellcasting' === field || 'featuresAndTraits' === field || 'otherProficienciesAndLanguages' === field || 'equiptment' === field || 'characterApperance' === field || 'alliesAndOrganizations' === field || 'additionalFeaturesAndTraits' === field || 'characterBackstory' === field || 'treasure' === field || 'totalNonConsumableMagicItems' === field) {
    type = BIO_STRING;
  } else if ('attack1' === field || 'attack2' === field || 'attack3' === field || field === 'hitDieTotal' || 'hitDiceTotal' === field) {
    type = ATT_DEF_STRING;
  } else if ('failures' === field || 'successes' === field || 'armorClass' === field || 'initiative' === field || 'speed' === field || 'hitPoints' === field || 'currentHitPoints' === field || 'temporaryHitPoints' === field || 'hitDice' === field) {
    type = ATT_DEF_INT;
    value = value.replace(/\D/, '');
  }
  return ({
    type,
    field,
    value,
  });
}

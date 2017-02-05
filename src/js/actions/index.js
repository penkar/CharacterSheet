import {CHAR_NAME_STRING, CHAR_NAME_INT, BIO_STRING, BIO_INT, } from '../constants'

export const change = ({field, value}) => {
  let type
  console.log(field, value);
  if('level' === field || 'experiencePoints' === field || 'dciNumber' === field) {
    type = CHAR_NAME_INT;
    value = value.replace(/\D/, '');
  } else if ('class' === field || 'background' === field || 'race' === field || 'alignment' === field || 'playerName' === field || 'faction' === field || 'characterName' === field || 'age' === field || 'height' === field || 'weight' === field || 'eyes' === field || 'skin' === field || 'hair' === field) {
    type = CHAR_NAME_STRING;
  } else if ('cp' === field || 'sp' === field || 'ep' === field || 'gp' === field || 'pp' === field) {
    type = BIO_INT
    value = value.replace(/\D/, '');
  } else if ('personalityTraits' === field || 'ideals' === field || 'bonds' === field || 'flaws' === field || 'attacksAndSpellcasting' === field || 'featuresAndTraits' === field || 'otherProficienciesAndLanguages' === field || 'equiptment' === field || 'characterApperance' === field || 'alliesAndOrganizations' === field || 'additionalFeaturesAndTraits' === field || 'characterBackstory' === field || 'treasure' === field || 'totalNonConsumableMagicItems' === field) {
    type = BIO_STRING
  }
  return ({
    type,
    field,
    value,
  });
}

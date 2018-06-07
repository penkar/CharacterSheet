import {ATT_DEF_STRING, ATT_DEF_INT, CHAR_NAME_STRING, CHAR_NAME_INT, BIO_STRING, BIO_INT, } from '../constants'

export const change = ({field, value}) => {
  let type
  switch (field) {
    case 'level':
    case 'experiencePoints':
    case 'dciNumber':
      type = CHAR_NAME_INT;
      value = value.replace(/\D/, '');
      break;
    case 'class':
    case 'background':
    case 'race':
    case 'alignment':
    case 'playerName':
    case 'faction':
    case 'characterName':
    case 'age':
    case 'height':
    case 'weight':
    case 'eyes':
    case 'skin':
    case 'hair':
      type = CHAR_NAME_STRING;
      break;
    case 'cp':
    case 'sp':
    case 'ep':
    case 'gp':
    case 'pp':
      type = BIO_INT;
      value = value.replace(/\D/, '');
      break;
    case 'allies':
    case 'personalityTraits':
    case 'ideals':
    case 'bonds':
    case 'flaws':
    case 'attacksAndSpellcasting':
    case 'featuresAndTraits':
    case 'otherProficienciesAndLanguages':
    case 'equiptment':
    case 'characterApperance':
    case 'alliesAndOrganizations':
    case 'additionalFeaturesAndTraits':
    case 'characterBackstory':
    case 'treasure':
    case 'totalNonConsumableMagicItems':
      type = BIO_STRING;
      break;
    case 'attack1':
    case 'attack2':
    case 'attack3':
    case 'hitDieTotal':
    case 'hitDieTotal':
      type = ATT_DEF_STRING;
      break;
    case 'failures':
    case 'successes':
    case 'armorClass':
    case 'initiative':
    case 'speed':
    case 'hitPoints':
    case 'currentHitPoints':
    case 'temporaryHitPoints':
    case 'hitDie':
    case 'exhaustion':
    default:
      type = ATT_DEF_INT;
      value = value.replace(/\D/, '');
      break
  }
  return ({type, field, value,});
}

import {CHAR_NAME_STRING, CHAR_NAME_INT, } from '../constants'

export const change = ({field, value}) => {
  let type
  if('level' === field || 'experiencePoints' === field || 'dciNumber' === field) {
    type = CHAR_NAME_INT;
    value = value.replace(/\D/, '');
  } else if ('class' === field || 'background' === field || 'race' === field || 'alignment' === field || 'playerName' === field || 'faction' === field || 'characterName' === field || 'age' === field || 'height' === field || 'weight' === field || 'eyes' === field || 'skin' === field || 'hair' === field) {
    type = CHAR_NAME_STRING;
  }
  return ({
    type,
    field,
    value,
  });
}

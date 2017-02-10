import {SPELL_STRINGS, SPELL_ADD, SPELL_REMOVE, SPELL_STOCK, SPELL_PREPARED,} from '../constants'

export const magicChange = ({value, level, i, prepared, newspell, total, oldspell, strings}) => {
  if ( strings ) {
    return ({
      type: SPELL_STRINGS,
      value,
    });
  } else if ( total ) {
    return ({
      type: SPELL_STOCK,
      level,
    });
  } else if ( newspell ) {
    return ({
      type: SPELL_ADD,
      level: `spellLevel${level}`,
      value,
    });
  } else if ( oldspell ) {
    return ({
      type: SPELL_REMOVE,
      level: `spellLevel${level}`,
      i,
    })
  } else {
    return ({
      type: SPELL_PREPARED,
      level: `spellLevel${level}`,
      i,
      prepared,
    });
  }
}

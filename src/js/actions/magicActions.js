import {SPELL_ADD, SPELL_REMOVE, SPELL_STOCK, SPELL_PREPARED,} from '../constants'

export const magicChange = ({value, level, i, prepared, newspell, total, oldspell}) => {
  console.log(value, level, i, prepared, newspell, total, oldspell)
  if ( total ) {
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
  } else if ( i ) {
    return ({
      type: SPELL_PREPARED,
      level,
      i,
      prepared,
    });
  }
}

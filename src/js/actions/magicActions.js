import {SPELL_CLASS, SPELL_STOCK, SPELL_PREPARED,} from '../constants'

export const magicChange = ({value, level, i, prepared, newspell, total}) => {
  if(total) {
    return ({
      type: SPELL_STOCK,
      level,
    })
  } else if(newspell) {
    return ({
      type: SPELL_SET,
      level,
      value,
    })
  } else if (i) {
    return ({
      type: SPELL_PREPARED,
      level,
      i,
      prepared,
    })
  }
}

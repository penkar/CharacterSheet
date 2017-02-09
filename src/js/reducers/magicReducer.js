import {SPELL_CLASS, SPELL_STOCK, SPELL_PREPARED,} from '../constants'

const initial = {
  spellcastingClass:'',
  stock: {
    '0':'CANTRIP',
    '1':'',
    '2':'',
    '3':'',
    '4':'',
    '5':'',
    '6':'',
    '7':'',
    '8':'',
    '9':'',
  },
  spellLevel0: [{name:'asfadsf', prepared:true}],
  spellLevel1: [],
  spellLevel2: [],
  spellLevel3: [],
  spellLevel4: [],
  spellLevel5: [],
  spellLevel6: [],
  spellLevel7: [],
  spellLevel8: [],
  spellLevel9: [],
}

const magicReducer = (state = initial, action) => {
  switch (action.type) {
    case SPELL_CLASS:
    case SPELL_STOCK:
    case SPELL_PREPARED:
    default:
      return state;
  }
}

export default magicReducer;

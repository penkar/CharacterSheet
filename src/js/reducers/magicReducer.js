import {SPELL_STRINGS, SPELL_ADD, SPELL_REMOVE, SPELL_STOCK, SPELL_PREPARED, HYDRATE, CLEAN,} from '../constants'

const initial = {
  spellcastingClass:'',
  spellcastingAbility:'',
  spellSaveDC:'',
  spellSaveBonus:'',
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
  spellLevel0:[],
  spellLevel1:[],
  spellLevel2:[],
  spellLevel3:[],
  spellLevel4:[],
  spellLevel5:[],
  spellLevel6:[],
  spellLevel7:[],
  spellLevel8:[],
  spellLevel9:[],
}

const magicReducer = (state = initial, action) => {console.log('action', action)
  let nstate = {}, arr;
  switch (action.type) {
    case SPELL_STRINGS:
      return Object.assign({}, state, action.value);
    case SPELL_ADD:
      arr = [...state[action.level]];
      nstate[action.level] = [{name: action.value,prepared: false}, ...arr];
      return Object.assign({}, state, nstate);
    case SPELL_REMOVE:
      arr = [...state[action.level]]
      arr.splice(action.i, 1);
      nstate[action.level] = [...arr];
      return Object.assign({}, state, nstate);
    case SPELL_STOCK:
      nstate = Object.assign({}, state.stock);
      nstate[action.level] = action.value;
      return Object.assign({}, state, {stock:nstate});
    case SPELL_PREPARED:
      arr = [...state[action.level]];
      arr[action.i].prepared = action.prepared;// = arr[action.i].prepared = action.prepared;
      nstate[action.level] = [...arr];
      return Object.assign({}, state, nstate);
    case HYDRATE:
      if( !action.hasOwnProperty('magicReducer') ) return state;
      return Object.assign({}, initial, action.magicReducer)
    case CLEAN:
      return {...initial}
    default:
      return state;
  }
}

export default magicReducer;

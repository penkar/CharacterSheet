import {SPELL_STRINGS, SPELL_ADD, SPELL_REMOVE, SPELL_STOCK, SPELL_PREPARED, HYDRATE,} from '../constants'

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

const magicReducer = (state = initial, action) => {
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
      nstate = Object.assign({}, state.action);
      nstate[action.level] = action.value;
      return Object.assign({}, state, nstate);
    case SPELL_PREPARED:
      arr = [...state[action.level]];
      arr[action.i].prepared = action.prepared;// = arr[action.i].prepared = action.prepared;
      nstate[action.level] = [...arr];
      return Object.assign({}, state, nstate);
    case HYDRATE:
      return action.hasOwnProperty(action.magicReducer) ? action.magicReducer : state;
    default:
      return state;
  }
}

export default magicReducer;

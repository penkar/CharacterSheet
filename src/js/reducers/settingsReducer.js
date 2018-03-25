import {CHANGE_MENU, CHANGE_VIEW, CHANGE_LOADING, CHANGE_SETTING, CHANGE_MODAL, HYDRATE, ERROR, CLEAN,} from '../constants'
import {ABILITY_SCORE, ATT_DEF_STRING, ATT_DEF_INT, BIO_STRING, BIO_INT, CHAR_NAME_STRING, CHAR_NAME_INT, SPELL_STRINGS, SPELL_ADD, SPELL_REMOVE, SPELL_STOCK, SPELL_PREPARED, SKILL_CHECK, SKILL_SCORE, SKILL_AFFILIATE,} from '../constants'

const initial = {
  pending: false,
  combined: false,
  character: true,
  loading: false,
  hash: '',
  modal: false,
  modalType: '',
  error: '',
  view: 'all',
  menuOpen:false,
}

const settingsReducer = (state=initial, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return Object.assign({}, state, {view: action.view});
    case ERROR:
      return Object.assign({}, state, {error: action.error, modal: true, loading: false, modalType:'error'});
    case CHANGE_LOADING:
      return Object.assign({}, state, {loading: action.loading});
    case CHANGE_MODAL:
      return Object.assign({}, state, {modal: action.setting, modalType: action.modalType});
    case HYDRATE:
      if( !action.hasOwnProperty('settingsReducer') ) return state;
      return Object.assign({}, state, action.settingsReducer, {loading: false, pending: false})
    case ATT_DEF_STRING:
    case ATT_DEF_INT:
    case BIO_STRING:
    case BIO_INT:
    case CHAR_NAME_STRING:
    case CHAR_NAME_INT:
    case SPELL_STRINGS:
    case SPELL_ADD:
    case SPELL_REMOVE:
    case SPELL_STOCK:
    case SPELL_PREPARED:
    case SKILL_CHECK:
    case SKILL_SCORE:
    case SKILL_AFFILIATE:
    case ABILITY_SCORE:
      return Object.assign({}, state, {pending: true});
    case CLEAN:
    case CHANGE_SETTING:
    case CHANGE_MENU:
      return Object.assign({}, state, {menuOpen: !state.menuOpen});
    default:
      return state
  }
}

export default settingsReducer

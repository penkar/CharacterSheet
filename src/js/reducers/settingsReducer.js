import {CHANGE_LOADING, CHANGE_SETTING, CHANGE_MODAL, HYDRATE, ERROR} from '../constants'

const initial = {
  combined: false,
  character: true,
  loading: false,
  hash: '',
  modal: false,
  modalType: '',
  error: '',
}

const settingsReducer = (state=initial, action) => {
  switch (action.type) {
    case ERROR:
      return Object.assign({}, state, {error: action.error, modal: true, loading: false, modalType:'error'});
    case CHANGE_LOADING:
      return Object.assign({}, state, {loading: action.loading});
    case CHANGE_MODAL:
      return Object.assign({}, state, {modal: action.setting, modalType: action.modalType});
    case HYDRATE:
      if( !action.hasOwnProperty('settingsReducer') ) return state;
      return Object.assign({}, state, action.settingsReducer, {loading: false})
    case CHANGE_SETTING:
    default:
      return state
  }
}

export default settingsReducer

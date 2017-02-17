import {CHANGE_SETTING, CHANGE_MODAL, HYDRATE,} from '../constants'

const initial = {
  combined: false,
  character: true,
  loading: false,
  hash: '',
  modal: false,
  modalType: '',
}

const settingsReducer = (state=initial, action) => {
  switch (action.type) {
    case CHANGE_SETTING:
      return state
    case CHANGE_MODAL:
      return Object.assign({}, state, {modal: action.setting, modalType: action.modalType});
    case HYDRATE:
      return action.hasOwnProperty(action.settingsReducer) ? action.settingsReducer : state;
    default:
      return state
  }
}

export default settingsReducer

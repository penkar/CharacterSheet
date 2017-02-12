import {CHANGE_SETTING, HYDRATE,} from '../constants'

const initial = {
  combined: false,
  character: true,
  loading: false,
  hash: '',
}

const settingsReducer = (state=initial, action) => {
  switch (state.type) {
    case CHANGE_SETTING:
      return state
    case HYDRATE:
      return action.hasOwnProperty(action.settingsReducer) ? action.settingsReducer : state;
    default:
      return state
  }
}

export default settingsReducer

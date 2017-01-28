import {CHANGE_SETTING, } from '../constants'

const initial = {
  combined: false,
  character: true,
}

const settingsReducer = (state=initial, action) => {
  switch (state.type) {
    case CHANGE_SETTING:
      return state
    default:
      return state
  }
}

export default settingsReducer

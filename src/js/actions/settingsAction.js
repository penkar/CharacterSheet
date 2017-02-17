import {CHANGE_SETTING, CHANGE_LOADING, CHANGE_MODAL} from '../constants'

export const settingsChange = ({loading, setting, value,}) => {
  if(loading) {
    return ({
      type:CHANGE_SETTING,
      value,
    })
  } else if(setting) {
    return ({
      type:CHANGE_SETTING,
      value,
    })
  }
}

export const modalChange = ({setting, modalType}) => {
  return ({
    type: CHANGE_MODAL,
    setting,
    modalType,
  })
}

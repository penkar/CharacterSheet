import {CHANGE_SETTING, CHANGE_LOADING} from '../constants'

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

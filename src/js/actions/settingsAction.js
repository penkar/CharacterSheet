import {CHANGE_MENU, CHANGE_VIEW, CHANGE_SETTING, CHANGE_LOADING, CHANGE_MODAL} from '../constants'

export const changeMenu = () => ({type:CHANGE_MENU});
export const settingsView = (view) => ({type: CHANGE_VIEW, view})
export const changeSetting = ({key, value}) => ({key, value, type:CHANGE_SETTING});

export const modalChange = ({setting, modalType}) => ({
  type: CHANGE_MODAL,
  setting,
  modalType,
});

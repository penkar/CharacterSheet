import {CHANGE_MENU, CHANGE_VIEW, CHANGE_SETTING, CHANGE_LOADING, CHANGE_MODAL, CHANGE_SETTINGS} from '../constants'

export const changeMenu = () => ({type:CHANGE_MENU});
export const settingsView = (view) => ({type: CHANGE_VIEW, view})
export const changeSetting = ({key, value}) => ({key, value, type:CHANGE_SETTING});
export const changeSettings = (value) => ({value, type:CHANGE_SETTINGS});

export const modalChange = ({setting, modalType}) => ({
  type: CHANGE_MODAL,
  setting,
  modalType,
});

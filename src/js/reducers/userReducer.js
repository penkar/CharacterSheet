import {USER_SETTING, USER_SIGNOUT, USER_SIGNIN,} from '../constants'

const initial = {
  accessToken:'',
  authToken: '',
  displayName: '',
  email: '',
  emailVerified: '',
  photoURL: '',
  providerData: [],
  status: '',
  uid: '',
}

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_SETTING:
      delete action.type
      return Object.assign({}, state, action);
    case USER_SIGNOUT:
      delete action.type
      return Object.assign({}, initial);
    case USER_SIGNIN:
      delete action.type
      return Object.assign({}, state, action);
    default:
      return state;
  }
}

export default userReducer

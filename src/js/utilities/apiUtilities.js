import {HYDRATE, CHANGE_LOADING, ERROR} from '../constants'

export const fetchUser = (userID, dispatch) => {
  // if(!userID.match(/^\d{9}$/)) return {}

  fetch(`https://charsheet-3ebfd.firebaseio.com/${userID}.json`)
    .then((user) => ( user.json()))
    .then((data) => {
      if( data ) {
        return dispatch( Object.assign({type:HYDRATE}, data) )
      } else {
        return dispatch( {type: ERROR, error:'Account ID not found.'} )
      }
    })
    .catch((error) => ( dispatch( {type: ERROR, error} )))
  return ({type:CHANGE_LOADING, loading: true})
}

export const updateUser = () => {

}

export const deleteUser = () => {

}

export const createUser = () => {

}

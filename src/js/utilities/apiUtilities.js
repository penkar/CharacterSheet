import {HYDRATE, CHANGE_LOADING, ERROR, CLEAN} from '../constants'
import bareUser from './bareUser'

export const fetchUser = (userID, dispatch) => {
  dispatch({type:CLEAN});
  fetch(`https://charsheet-3ebfd.firebaseio.com/${userID}.json`)
    .then((user) => ( user.json()))
    .then((data) => {
      if( data ) {
        return dispatch( Object.assign({type:HYDRATE}, data, {settingsReducer: {}}) )
      } else {
        return dispatch( {type: ERROR, error:'Account ID not found.'} )
      }
    })
    .catch((error) => ( dispatch( {type: ERROR, error} )))
  return ({type:CHANGE_LOADING, loading: true})
}

export const updateUser = (userID, dispatch, user = bareUser) => {
  fetch(`https://charsheet-3ebfd.firebaseio.com/${userID}.json`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:'PUT',
    body: JSON.stringify(user),
  })
    .then((user) => ( user.json()))
    .then((data) => {
      if( data ) {
        return dispatch( Object.assign({type:HYDRATE}, data, {settingsReducer: {}}) )
      } else {
        return dispatch( {type: ERROR, error:'Account ID not found.'} )
      }
    })
    .catch((error) => ( dispatch( {type: ERROR, error} )))
  return ({type:CHANGE_LOADING, loading: true})
}

export const deleteUser = () => {
}

export const createUser = (userID, dispatch, user = bareUser) => {
  fetch(`https://charsheet-3ebfd.firebaseio.com/${userID}.json`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:'PUT',
    body: JSON.stringify(user),
  })
    .then((user) => ( user.json()))
    .then((data) => {
      setTimeout( ()=>(window.location.href = `/#${userID}`),250 );
    })
    .catch((error) => ( dispatch( {type: ERROR, error} )))
  return ({type:CHANGE_LOADING, loading: true})
}

import {CHAR_NAME_STRING, CHAR_NAME_INT, HYDRATE,} from '../constants'

const initial = {
  class:'',
  level:0,
  background:'',
  race:'',
  alignment:'',
  playerName:'',
  experiencePoints:0,
  faction:'',
  dciNumber:0,
  characterName:'',
  age:'',
  height:'',
  weight:'',
  eyes:'',
  skin:'',
  hair:'',
}

const characterNameReducer = (state=initial, action) => {
  let nstate = {}
  switch (action.type) {
    case CHAR_NAME_INT:
      nstate[action.field] = parseInt(action.value);
      return Object.assign({}, state, nstate);
    case CHAR_NAME_STRING:
      nstate[action.field] = action.value;
      return Object.assign({}, state, nstate);
    case HYDRATE:
      if( !action.hasOwnProperty('characterNameReducer') ) return state;
      return Object.assign({}, initial, action.characterNameReducer)
    default:
      return state;
  }
}
export default characterNameReducer

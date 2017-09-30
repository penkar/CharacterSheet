import {ABILITY_SCORE, HYDRATE, CLEAN} from '../constants';

const initial = {
  strength: {value: 0, modifier: 0},
  dexterity: {value: 0, modifier: 0},
  constitution: {value: 0, modifier: 0},
  intelligence: {value: 0, modifier: 0},
  wisdom: {value: 0, modifier: 0},
  charisma: {value: 0, modifier: 0},
}

const abilityReducer = (state=initial, action) => {
  let nstate = {};
  switch (action.type) {
    case ABILITY_SCORE:
      let {field, value, modifier} = action;
      nstate[field] = {value, modifier}
      return Object.assign({}, state, nstate);
    case HYDRATE:
      if( !action.hasOwnProperty('abilityReducer') ) return state;
      return Object.assign({}, initial, action.abilityReducer)
    case CLEAN:
      return {...initial}
    default:
      return state;
  }
}

export default abilityReducer

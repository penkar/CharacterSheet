import {ABILITY_SCORE, } from '../constants';

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
    default:
      return state;
  }
}

export default abilityReducer

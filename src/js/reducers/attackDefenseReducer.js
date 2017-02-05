import {ATT_DEF_STRING, ATT_DEF_INT,} from '../constants'

const initial = {
  armorClass:0,
  initiative:0,
  speed:0,

  hitPoints:0,
  currentHitPoints:0,
  temporaryHitPoints:0,

  hitDice:0,
  hitDiceTotal:'',

  successes: 0,
  failures:0,

  attack1:{name:'',bonus:'',dmg:'',},
  attack2:{name:'',bonus:'',dmg:'',},
  attack3:{name:'',bonus:'',dmg:'',},
}

const attackDefenseReducer = (state=initial, action) => {
  let nstate = {}
  switch (action.type) {
    case ATT_DEF_INT:
      nstate[action.field] = parseInt(action.value);
      return Object.assign({}, state, nstate);
    case ATT_DEF_STRING:
      nstate[action.field] = action.value;
      return Object.assign({}, state, nstate);
      // nstate[]
      // return Object.assign({}, state, );
    default:
      return state;
  }
}

export default attackDefenseReducer

import {ATT_DEF_STRING, ATT_DEF_INT, HYDRATE,} from '../constants'

const initial = {
  armorClass:0,
  initiative:0,
  speed:0,

  hitPoints:0,
  currentHitPoints:0,
  temporaryHitPoints:0,
  exhaustion:0,

  hitDie:0,
  hitDieTotal:'',

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
    case HYDRATE:
      if( !action.hasOwnProperty('attackDefenseReducer') ) return state;
      return Object.assign({}, initial, action.attackDefenseReducer)
    default:
      return state;
  }
}

export default attackDefenseReducer

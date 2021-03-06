import {SKILL_CHECK, SKILL_SCORE, SKILL_AFFILIATE, ABILITY_SCORE, HYDRATE, CLEAN} from '../constants'

const initial = {
  passiveWisdom: {value: 0,placeholder: 0,},

  inspiration: {value: 0,placeholder: 0,},
  proficiencyBonus: {value: 0,placeholder: 0,},

  strengthSaving: {checked: false,value: 0,placeholder: 0,},
  dexteritySaving: {checked: false,value: 0,placeholder: 0,},
  constitutionSaving: {checked: false,value: 0,placeholder: 0,},
  intelligenceSaving: {checked: false,value: 0,placeholder: 0,},
  wisdomSaving: {checked: false,value: 0,placeholder: 0,},
  charismaSaving: {checked: false,value: 0,placeholder: 0,},

  acrobatics: {checked: false, value: 0, placeholder: 0},
  animalHandling: {checked: false, value: 0, placeholder: 0},
  arcana: {checked: false, value: 0, placeholder: 0},
  athletics: {checked: false, value: 0, placeholder: 0},
  deception: {checked: false, value: 0, placeholder: 0},
  history: {checked: false, value: 0, placeholder: 0},
  insight: {checked: false, value: 0, placeholder: 0},
  intimidation: {checked: false, value: 0, placeholder: 0},
  investigation: {checked: false, value: 0, placeholder: 0},
  medicine: {checked: false, value: 0, placeholder: 0},
  nature: {checked: false, value: 0, placeholder: 0},
  perception: {checked: false, value: 0, placeholder: 0},
  performance: {checked: false, value: 0, placeholder: 0},
  persuation: {checked: false, value: 0, placeholder: 0},
  religion: {checked: false, value: 0, placeholder: 0},
  sleightOfHand: {checked: false, value: 0, placeholder: 0},
  stealth: {checked: false, value: 0, placeholder: 0},
  survival: {checked: false, value: 0, placeholder: 0},
}

const skillsReducer = (state=initial, action) => {
  let field = Object.assign({}, state[action.field]), obj = {};
  switch (action.type) {
    case SKILL_AFFILIATE:
      field.value = action.value;
      obj[action.field] = field;
      return Object.assign({}, state, obj);
    case SKILL_SCORE:
      field.value = action.value;
      obj[action.field] = field;
      return Object.assign({}, state, obj);
    case SKILL_CHECK:
      field.checked = action.checked;
      obj[action.field] = field;
      return Object.assign({}, state, obj);
    case HYDRATE:
      if( !action.hasOwnProperty('skillsReducer') ) return state;
      return Object.assign({}, initial, action.skillsReducer)
    case CLEAN:
      return {...initial}
    default:
      return state;
  }
}

export default skillsReducer

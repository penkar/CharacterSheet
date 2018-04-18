import {ABILITY_SCORE, SKILL_SCORE, SKILL_AFFILIATE, SKILL_CHECK, FEAT_CHANGE} from '../constants'

export const changeScore = ({field, value, modifier, checked, ability, affiliate, skill, radio, feat}) => {
  if(feat) {
    return ({type:FEAT_CHANGE, feat});
  } else if(skill) {
    return ({type:ABILITY_SCORE, modifier, field, value,});
  } else if (affiliate) {
    value = parseInt(value.replace(/\D/, ''));
    return ({type:SKILL_AFFILIATE, field, value,});
  } else if (ability) {
    return ({type:SKILL_SCORE, field, value,});
  } else if(radio) {
    return ({type:SKILL_CHECK, field, checked,})
  }
}

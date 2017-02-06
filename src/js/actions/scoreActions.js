import {ABILITY_SCORE, SKILL_SCORE, SKILL_AFFILIATE, SKILL_CHECK,} from '../constants'



export const changeScore = ({field, value, modifier, checked,   ability, affiliate, skill, radio}) => {
  if(skill) {
    return ({
      type: ABILITY_SCORE,
      modifier,
      field,
      value,
    });
  } else if (affiliate) {
    value = parseInt(value.replace(/\D/, ''));
    return ({
      type:SKILL_AFFILIATE,
      field,
      value,
    });
  } else if (ability) {
    value = parseInt(value.replace(/\D/, ''));
    return ({
      type:SKILL_SCORE,
      field,
      value,
    });
  } else if(radio) {
    return ({
      type: SKILL_CHECK,
      field,
      checked,
    })
  }
}

import {ABILITY_SCORE, } from '../constants'



export const changeScore = ({field, value, modifier, ability, skill}) => {
  if(skill) {
    return ({
      type: ABILITY_SCORE,
      modifier,
      field,
      value,
    });
  } else if (ability) {
    return false;
  }
}

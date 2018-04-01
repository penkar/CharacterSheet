import React from 'react'
import {ZText} from './ZText'
export const PersonalityTraits = ({text, field, change}) =>
  ZText({id:'personalitytraits', text, field, change, rows:'4', cols:'20', string:'PERSONALITY TRAITS'});

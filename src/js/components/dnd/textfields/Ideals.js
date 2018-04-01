import React from 'react'
import {ZText} from './ZText'
export const Ideals = ({text, field, change}) =>
  ZText({id:'ideals', text, field, change, rows:'4', cols:'20', string:'IDEALS'});

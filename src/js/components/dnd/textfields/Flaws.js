import React from 'react'
import {ZText} from './ZText'
export const Flaws = ({text, field, change}) =>
  ZText({id:'flaws', text, field, change, rows:'4', cols:'20', string:'FLAWS'});

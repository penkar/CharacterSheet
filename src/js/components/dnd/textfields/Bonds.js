import React from 'react'
import {ZText} from './ZText'
export const Bonds = ({text, field, change}) =>
  ZText({id:'bonds', text, field, change, rows:'4', cols:'20', string:'BONDS'});

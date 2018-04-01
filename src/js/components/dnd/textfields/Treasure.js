import React from 'react'
import {ZText} from './ZText'
export const Treasure = ({text, field, change}) =>
  ZText({id:'treasure', text, field, change, rows:'6', cols:'40', string:'TREASURES', klass:'pure-u-1 pure-u-lg-3-5'});

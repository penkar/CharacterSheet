import React from 'react'
import {ZText} from './ZText'
export const CharacterApperance = ({text, field, change}) =>
  ZText({id:'apperance', text, field, change, rows:'6', cols:'20', string:'CHARACTER APPEARANCE', klass:'pure-u-1 pure-u-lg-1-5'});

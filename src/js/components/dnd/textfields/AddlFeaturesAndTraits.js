import React from 'react'
import {ZText} from './ZText'
export const AddlFeaturesAndTraits = ({text, field, change}) =>
  ZText({id:'addl', text, field, change, rows:'6', cols:'40', string:'ADDITIONAL FEATURES & TRAITS', klass:'pure-u-1 pure-u-lg-3-5'});

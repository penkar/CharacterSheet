import React from 'react'
import ZText from './ZText'
export const Allies = ({text, field, change}) => (
  <ZText
    id={field}
    text={text}
    field={field}
    change={change}
    rows='6'
    cols='40'
    string='ALLIES & ORGANIZATIONS'
    klass='pure-u-1 pure-u-lg-3-5'
    />
)

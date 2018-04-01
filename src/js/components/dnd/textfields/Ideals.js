import React from 'react'
import ZText from './ZText'
export const Ideals = ({text, field, change}) => (
  <ZText
    id='ideals'
    text={text}
    field={field}
    change={change}
    rows='4'
    cols='20'
    string='IDEALS'
    />
);

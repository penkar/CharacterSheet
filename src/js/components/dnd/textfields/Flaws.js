import React from 'react'
import ZText from './ZText'
export const Flaws = ({text, field, change}) => (
  <ZText
    id='flaws'
    text={text}
    field={field}
    change={change}
    rows='4'
    cols='20'
    string='FLAWS'
    />
);

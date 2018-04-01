import React from 'react'
import ZText from './ZText'
export const Bonds = ({text, field, change}) => (
  <ZText
    id='bonds'
    text={text}
    field={field}
    change={change}
    rows='4'
    cols='20'
    string='BONDS'
    />
);

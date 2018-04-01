import React from 'react'
import ZText from './ZText'
export const PersonalityTraits = ({text, field, change}) => (
  <ZText
    id='personalitytraits'
    text={text}
    field={field}
    change={change}
    rows='4'
    cols='20'
    string='PERSONALITY TRAITS'
    />
);

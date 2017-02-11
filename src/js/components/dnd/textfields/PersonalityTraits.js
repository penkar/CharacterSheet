import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='personalitytraits'
    text={text}
    field={field}
    change={change}
    rows='4'
    cols='20'
    string='Personality Traits'
    />
)
export default text

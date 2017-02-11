import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='featuresandtraits'
    text={text}
    field={field}
    change={change}
    rows='13'
    cols='20'
    string='FEATURES & TRAITS'
    />
)
export default text

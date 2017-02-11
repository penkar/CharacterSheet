import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='addl'
    text={text}
    field={field}
    change={change}
    rows='12'
    cols='40'
    string='ADDITIONAL FEATURES & TRAITS'
    />
)
export default text

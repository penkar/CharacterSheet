import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='treasure'
    text={text}
    field={field}
    change={change}
    rows='12'
    cols='66'
    string='Treasure'
    />
)
export default text

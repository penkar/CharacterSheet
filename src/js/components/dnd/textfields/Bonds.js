import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='bonds'
    text={text}
    field={field}
    change={change}
    rows='4'
    cols='33'
    string='Bonds'
    />
)
export default text

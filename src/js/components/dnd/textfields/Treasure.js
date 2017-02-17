import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='treasure'
    text={text}
    field={field}
    change={change}
    rows='6'
    cols='40'
    string='TREASURES'
    klass='pure-u-1 pure-u-lg-3-5'
    />
)
export default text

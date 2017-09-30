import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='backstory'
    text={text}
    field={field}
    change={change}
    rows='6'
    cols='20'
    string='CHARACTER BACKSTORY'
    klass='pure-u-1 pure-u-lg-1-5'
    />
)
export default text

import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='apperance'
    text={text}
    field={field}
    change={change}
    rows='6'
    cols='20'
    string='CHARACTER APPEARANCE'
    klass='pure-u-1 pure-u-lg-1-5'
    />
)
export default text

import React, {Component, PropTypes} from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='backstory'
    text={text}
    field={field}
    change={change}
    rows='26'
    cols='20'
    string='CHARACTER BACKSTORY'
    />
)
export default text

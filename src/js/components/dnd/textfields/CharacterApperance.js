import React, {Component, PropTypes} from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='apperance'
    text={text}
    field={field}
    change={change}
    rows='13'
    cols='20'
    string='CHARACTER APPEARANCE'
    />
)
export default text

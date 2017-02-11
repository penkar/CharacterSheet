import React from 'react'
import ZText from './ZText'

const text = ({text, field, change}) => (
  <ZText
    id='proficienciesandlanguages'
    text={text}
    field={field}
    change={change}
    rows='13'
    cols='20'
    string='OTHER PROFICIENCIES & LANGUAGES'
    />
)
export default text

import React from 'react'
import ZText from './ZText'
export function ProficienciesAndLanguages({text, field, change}) {
  return (
    <ZText
      id='proficienciesandlanguages'
      text={text}
      field={field}
      change={change}
      rows='6'
      cols='20'
      string='OTHER PROFICIENCIES & LANGUAGES'
      />
  )
}

import React from 'react'
import ZText from './ZText'
export const ProficienciesAndLanguages = ({text, field, change}) => (
  <ZText
    id='proficienciesandlanguages'
    text={text}
    field={field}
    change={change}
    rows='6'
    cols='20'
    string='OTHER PROFICIENCIES & LANGUAGES'
    />
);

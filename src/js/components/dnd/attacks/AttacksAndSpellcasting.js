import React from 'react'
import {Attack} from './Attack'
export const AttacksAndSpellcasting = ({att, att1, att2, att3}, change) =>
  <div id='attacks' className='sectional'>
    <div className='attack bold'>
      <div>Name</div>
      <div>Atk Bonus</div>
      <div>Damage/Type</div>
    </div>
    { Attack({field:'attack1', value:att1, change}) }
    { Attack({field:'attack2', value:att2, change}) }
    { Attack({field:'attack3', value:att3, change}) }

    <textarea value={att} rows='6' onChange={({target})=>change({value:target.value, field:'attacksAndSpellcasting'})} />
    <span className='bold'>Attacks & Spellcasting</span>
  </div>

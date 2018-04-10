import React from 'react'
import {CBox} from '../../generics/CBox';
export const Score = ({value, field, obj, name, mod, pro, change}) => (
  <div className='score'>
    { CBox({
      click:() => change({field, checked:!obj.checked, radio:true,}),
      checked:obj.checked}) }

    <input
      onChange={
        ({target}) => change({field, value:target.value, ability:true,})
      }
      placeholder={obj.placeholder + mod + (obj.checked ? pro : 0)}
      value={obj.value || ''} />

    <span className='title'>{name}</span>
  </div>
)

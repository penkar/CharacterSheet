import React from 'react'
import {Spell} from './Spell'
import {NewSpell} from './NewSpell'
export const SpellLevel = ({level, spells, stock, change}) =>
  <div className='level sectional pure-u-1 pure-u-lg-1-4' key={level}>
    { level === '0' && <div className='spelllevel'>CANTRIPS</div> }

    { level !== '0' && <div className='spelllevel'>
        <span className='ct'>Level {level}</span>

        <input placeholder='Total' onChange={
          ({target}) => change({level, total:true, value:target.value})
        } className='total ct' value={stock}/>

        <input placeholder='Spell Expended' className='expended ct' />
      </div> }

    { spells.map(({name, prepared}, i)=> Spell({i, name, prepared, change, level}) ) }

    { NewSpell({change, level, i: spells.length + 2}) }
  </div>

import React from 'react'
import Spell from './Spell'
import NewSpell from './NewSpell'

const SpellLevel = ({level, spells, stock, change}) => {
  function total(e) {
    change({level, total:true, value: e.target.value});
  }
  function cantrip(level) {
    if(level === '0') {
      return <div className='spelllevel' key={level}>CANTRIPS</div>
    } else {
      return(
        <div className='spelllevel' key={level}>
          Level {level}
          <input placeholder='Total' onChange={total} className='total'/>&nbsp;
          <input placeholder='Spell Expended' className='expended'/>
        </div>
      );
    }
  }

  return (
    <div className='level sectional pure-u-1 pure-u-lg-1-4'>
      { cantrip(level) }
      {spells.map((x, i)=> ( Spell({key:i, i, spell:x, change, level}) )) }
      { NewSpell({change, level, i: spells.length + 2}) }
    </div>
  );
}

export default SpellLevel

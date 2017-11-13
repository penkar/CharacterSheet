import React from 'react'
export function Spell({key, i, spell, change, level}) {
  function click() {
    change({level, i, prepared: !spell.prepared});
  }
  function remove() {
    change({level, i, oldspell: true});
  }
  let {prepared, name} = spell;
  return (
    <div className='spell' key={i+'spell'}>
      <input type='checkbox' checked={prepared} onChange={click} />
      <div>{name}</div>
      <span style={{color:'red', fontSize:'2rem', cursor:'pointer'}} onClick={remove}>&nbsp;-</span>
    </div>
  )
}

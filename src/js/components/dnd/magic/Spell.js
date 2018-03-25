import React from 'react';
import {CBox} from '../../generics/CBox';

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
      { CBox({click, checked:prepared}) }
      <div className='name'>{name}</div>
      <span
        className='minus'
        onClick={remove} />
    </div>
  )
}

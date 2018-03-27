import React from 'react';
import {CBox} from '../../generics/CBox';
export function Spell({key, i, spell, change, level}) {
  let {prepared, name} = spell;
  var click = function () {
    change({level, i, prepared:!prepared});
  }, remove = function () {
    change({level, i, oldspell: true});
  }
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

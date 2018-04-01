import React from 'react';
import {CBox} from '../../generics/CBox';
export function Spell({i, change, level, name, prepared}) {
  var click = function () {
    change({level, i, prepared:!prepared});
  }, remove = function () {
    change({level, i, oldspell: true});
  }
  return (
    <div className='spell' key={name}>
      { CBox({click, checked:prepared}) }
      <div className='name'>{name}</div>
      <span className='minus' onClick={remove} />
    </div>
  )
}

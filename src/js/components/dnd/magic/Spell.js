import React from 'react';
import {CBox} from '../../generics/CBox';
export const Spell = ({i, change, level, name, prepared}) =>
  <div className='spell' key={name}>
    { CBox({click: function(){ change({level, i, prepared:!prepared})}, checked:prepared}) }
    <div className='name'>{name}</div>
    <span className='minus' onClick={() => change({level, i, oldspell:true})} />
  </div>

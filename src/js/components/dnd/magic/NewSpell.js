import React from 'react';
import {CBox} from '../../generics/CBox';
export function NewSpell({change, level, i}) {
  let string = '';
  let enter = () => {
    if(!string) return null;
    change({level, newspell:true, value:string});
  }, keypress = (e) => (string = e.target.value);
  return (
    <div className='spell' key={`${i}_new`}>
      { CBox({checked:false}) }
      <input
        className='name'
        placeholder='Spell Name'
        onChange={keypress}/>
      <span
        className="plus"
        onClick={enter}/>
    </div>
  );
}

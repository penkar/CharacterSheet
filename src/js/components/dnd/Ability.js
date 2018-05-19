import React from 'react'
import {modifierFunc} from '../../utilities/scoreutilities'

export function Ability ({modifier, value, field, change}) {
  function changeScore({target}) {
    let modifier = parseInt(modifier);
    change({value, modifier, field, skill:true});
  }
  function changeModifier({target}) {
    let modifier = parseInt(target.value || '0');
    change({value, modifier, field, skill:true});
  }
  return (
    <div key={field} className='ability pure-u-1'>
      <div>
        <span className='clearfix bold'>{field}</span>
        <br/>
        <input className='score'
          value={value}
          onChange={changeScore}/>
      </div>
      <input className='modifier'
        value={modifier || ''}
        placeholder={modifierFunc(value)}
        onChange={changeModifier}/>
    </div>
  );
}

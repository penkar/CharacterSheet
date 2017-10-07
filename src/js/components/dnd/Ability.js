import React from 'react'
import {modifierFunc} from '../../utilities/scoreutilities'

export function Ability ({modifier, value, field, change}) {
  function changeScore(e) {
    let modifier = parseInt(modifier), value = parseInt(e.target.value || '0');
    change({value, modifier, field, skill:true});
  }
  function changeModifier(e) {
    let modifier = parseInt(e.target.value || '0'), value = parseInt(value || '0');
    change({value, modifier, field, skill:true});
  }
  return (
    <div key={`${field}_ability`} className='ability pure-u-1'>
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

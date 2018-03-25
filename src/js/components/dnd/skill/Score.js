import React from 'react'
import {CBox} from '../../generics/CBox';
export function Score ({value, field, obj, name, mod, pro, change}) {
  function onChange(e) {
    let {value} = e.target;
    change({field, value, ability:true,});
  }
  function onChangeRadio(e) {
    let {checked} = e.target;
    change({field, checked:!obj.checked, radio:true,});
  }
  let placeholder = obj.placeholder + mod;
  if(obj.checked) placeholder += pro;
  return (
    <div className='score'>
      { CBox({click:onChangeRadio, checked:obj.checked}) }
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={obj.value || ''} />
      <span className='title'>{name}</span>
    </div>
  )
}

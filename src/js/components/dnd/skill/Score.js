import React from 'react'
export function Score ({value, field, obj, name, mod, pro, change}) {
  function onChange(e) {
    let {value} = e.target;
    change({field, value, ability:true,});
  }
  function onChangeRadio(e) {
    let {checked} = e.target;
    change({field, checked, radio:true,});
  }
  let placeholder = obj.placeholder + mod;
  if(obj.checked) placeholder += pro;
  return (
    <div className='score'>
      <input
        onChange={onChangeRadio}
        checked={obj.checked}
        type='checkbox' />
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={obj.value || ''} />
      <span className='title'>{name}</span>
    </div>
  )
}

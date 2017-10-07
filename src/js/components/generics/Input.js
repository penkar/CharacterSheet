import React from 'react'
export function Input ({change, placeholder = '', value, specific = '', field = ''}) {
  function changeEvent(e) {
    change({field, value:e.target.value});
  }
  return(
    <input
      className={`input-field ${specific}`}
      placeholder={placeholder}
      value={value}
      onChange={changeEvent}
      />
  )
}

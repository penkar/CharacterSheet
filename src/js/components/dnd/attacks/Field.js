import React from 'react'
export const Field = (field, value, name, change) =>
  <div id={field} key={field}>
    <input value={value} onChange={({target})=>(change({field, value:target.value}))}/>
    <span>{name}</span>
  </div>

import React from 'react'
export const Field = (field, value, name, change) => (
  <div id={field} key={field}>
    <input value={value} onChange={(e)=>(change({field, value:e.target.value}))}/>
    <span>{name}</span>
  </div>
);

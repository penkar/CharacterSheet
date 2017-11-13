import React from 'react'
export function Inspiration({placeholder, value}, change) {
  return (
    <div id='inspiration'>
      <input
        placeholder={placeholder}
        value={value || ''}
        onChange={(e)=>(change({field:'inspiration', value:e.target.value, affiliate:true}))}/>
      <span className='bold'>Inspiration</span>
    </div>
  );
}

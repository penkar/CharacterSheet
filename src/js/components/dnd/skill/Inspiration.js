import React from 'react'
export const Inspiration = ({placeholder, value}, change) => (
  <div id='inspiration'>
    <input
      placeholder={placeholder}
      value={value || ''}
      onChange={(e)=>(change({field:'inspiration', value:e.target.value, affiliate:true}))}/>
    <span className='bold'>Inspiration</span>
  </div>
);

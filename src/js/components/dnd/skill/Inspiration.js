import React from 'react'

const Inspriation = ({placeholder, value}, change) => (
  <div id='inspiration'>
    <input
      placeholder={placeholder}
      value={value || ''}
      onChange={(e)=>(change({field:'inspiration', value:e.target.value, affiliate:true}))}/>
    <span className='bold'>Inspriation</span>
  </div>
);

export default Inspriation;

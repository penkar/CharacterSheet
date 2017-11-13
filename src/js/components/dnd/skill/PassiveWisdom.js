import React from 'react'
export function PassiveWisdom({placeholder, value}, change){
  return (
    <div id='passivewisdom' className='sectional'>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e)=>(change({field:'passiveWisdom', value, affiliate:true}))}/>
      <span className='bold'>Passive Wisdom (Perception)</span>
    </div>
  )
}

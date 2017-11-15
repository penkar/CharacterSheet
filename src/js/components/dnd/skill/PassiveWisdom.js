import React from 'react'
export function PassiveWisdom({placeholder, value}, change){
  function ch(e){
    let {value} = e.target;
    change({field:'passiveWisdom', value, affiliate:true})
  }
  return (
    <div id='passivewisdom' className='sectional'>
      <input
        placeholder={placeholder}
        value={value}
        onChange={ch}/>
      <span className='bold'>Passive Wisdom (Perception)</span>
    </div>
  )
}

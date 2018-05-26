import React from 'react'
export const PassiveWisdom = ({placeholder, value}, change) => 
  <div id='passivewisdom' className='sectional'>
    <input
      placeholder={placeholder}
      value={value}
      onChange={
        ({target}) => change({field:'passiveWisdom', value:target.value, affiliate:true})
      }/>
    <span className='bold'>Passive Wisdom (Perception)</span>
  </div>

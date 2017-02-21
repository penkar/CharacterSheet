import React from 'react'

const PassiveWisdom = ({placeholder, value}, change) => (
  <div id='passivewisdom' className='sectional'>
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e)=>(change({field:'passiveWisdom', value, affiliate:true}))}/>
    <span className='bold'>Passive Wisdom (Perception)</span>
  </div>
)

export default PassiveWisdom

import React from 'react'
const Proficiency = ({value, placeholder}, change) => (
  <div id='proficiency'>
    <input
      placeholder={placeholder}
      value={value || ''}
      onChange={(e)=>(change({field:'proficiencyBonus', value: e.target.value, affiliate:true}))}
      />
    <span className='bold'>Proficiency</span>
  </div>
)

export default Proficiency;

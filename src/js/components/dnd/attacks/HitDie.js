import React from 'react'
export const HitDie = ({hitDie, hitDieTotal, change}) =>
  <div id='hitdie'>
    <div>Total: <input value={hitDie} onChange={(e) => change({field:'hitDie', value:e.target.value})}/></div>
    <textarea rows='5' cols='10' value={hitDieTotal} onChange={(e) => change({field:'hitDieTotal', value:e.target.value})}/>
    <span className='bold'>HIT DICE</span>
  </div>

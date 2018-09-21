import React from 'react'
export const HitDie = ({hitDie, hitDieTotal, change}) =>
  <div id='hitdie'>
    <div>
      Total: <input value={hitDie} onChange={({target}) => change({field:'hitDie', value:target.value})}/>
    </div>
    <textarearows='5' cols='10' value={hitDieTotal} onChange={({target}) => change({field:'hitDieTotal', value:target.value})}/>
    <span className='bold'>HIT DICE</span>
  </div>

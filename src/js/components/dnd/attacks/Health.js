import React from 'react'
import Field from './Field';
import DeathSaves from './DeathSaves';
import HitDie from './HitDie';

const Health = ({attack1, attack2, attack3, attacksAndSpells, armorClass, exhaustion, initiative, speed, hitPoints, currentHitPoints, temporaryHitPoints, hitDie, hitDieTotal, failures, successes}, change) => (
  <div id='health' className='sectional'>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      {Field('armorClass', armorClass, 'Armor Class', change)}
      {Field('initiative', initiative, 'Initiative', change)}
      {Field('speed', speed, 'Speed', change)}
    </div>

    <br/>
    {Field('hitPoints', hitPoints, 'Hit Point Maximum', change)}
    <br/>
    {Field('exhaustion', exhaustion, 'Exhaustion', change)}
    <br/>
    {Field('currentHitPoints', currentHitPoints, 'Current Hit Points', change)}
    <br/>
    {Field('temporaryHitPoints', temporaryHitPoints, 'Temporary Hit Points', change)}
    <br/>

    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <HitDie hitDie={hitDie} hitDieTotal={hitDieTotal} change={change}/>
      <DeathSaves failures={failures} successes={successes} change={change}/>
    </div>
  </div>
)

export default Health;

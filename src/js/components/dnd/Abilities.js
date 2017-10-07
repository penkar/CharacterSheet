import React from 'react'
import {Ability} from './Ability'

export function Abilities ({strength, dexterity, constitution, intelligence, wisdom, charisma}, change) {
  return (
    <div id='ability' className='pure-g sectional'>
      { Ability({...strength, field:'strength', change}) }
      { Ability({...dexterity, field:'dexterity', change}) }
      { Ability({...constitution, field:'constitution', change}) }
      { Ability({...intelligence, field:'intelligence', change}) }
      { Ability({...wisdom, field:'wisdom', change}) }
      { Ability({...charisma, field:'charisma', change}) }
    </div>
  );
}

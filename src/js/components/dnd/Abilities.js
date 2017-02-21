import React from 'react'
import Ability from './Ability'

const Abilities = ({strength, dexterity, constitution, intelligence, wisdom, charisma}, change) => (
  <div id='ability' className='pure-g sectional'>
    <Ability {...strength} field='strength' change={change}/>
    <Ability {...dexterity} field='dexterity' change={change}/>
    <Ability {...constitution} field='constitution' change={change}/>
    <Ability {...intelligence} field='intelligence' change={change}/>
    <Ability {...wisdom} field='wisdom' change={change}/>
    <Ability {...charisma} field='charisma' change={change}/>
  </div>
);

export default Abilities;

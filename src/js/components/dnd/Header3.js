import React from 'react'
import {Input} from '../generics'

const Header3 = ({change, magic}) => {
  function changeMagic(e) {
    let target = e.target, value = {spellcastingClass: magic.spellcastingClass, spellcastingAbility: magic.spellcastingAbility, spellSaveDC: magic.spellSaveDC, spellSaveBonus: magic.spellSaveBonus,}
    value[target.getAttribute('data')] = target.value;
    change({strings:true, value});
  }

  return (
    <div id='header3' className='pure-g sectional'>
      <div className='pure-u-1 pure-u-lg-2-24' />

      <div className='pure-u-1-2 pure-u-lg-5-24'>
        <input data='spellcastingClass' onChange={changeMagic} placeholder='Spell Casting Class' value={magic.spellcastingClass} />
        <div>Spell Casting Class</div>
      </div>

      <div className='pure-u-1-2 pure-u-lg-5-24'>
        <input data='spellcastingAbility' onChange={changeMagic} placeholder='Spell Casting Ability' value={magic.spellcastingAbility}/>
        <div>Spell Casting Ability</div>
      </div>

      <div className='pure-u-1-2 pure-u-lg-5-24'>
        <input data='spellSaveDC' onChange={changeMagic} placeholder='Spell Save DC' value={magic.spellSaveDC}/>
        <div>Spell Save DC</div>
      </div>

      <div className='pure-u-1-2 pure-u-lg-5-24'>
        <input data='spellSaveBonus' onChange={changeMagic} placeholder='Spell Attack Bonus' value={magic.spellSaveBonus}/>
        <div>Spell Attack Bonus</div>
      </div>
    </div>
  )
}
export {Header3}

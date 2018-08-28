import React from 'react'
import {SpellLevel} from './SpellLevel'
export const magicComponent = ({stock, spellLevel0, spellLevel1, spellLevel2, spellLevel3, spellLevel4, spellLevel5, spellLevel6, spellLevel7, spellLevel8, spellLevel9}, change, changeSettings) =>
  <div id='magic'>
    <div className='pure-g'>
      <div className='pure-u-1 pure-u-lg-1-24' />
      { SpellLevel({level:'0', change, stock:stock['0'], spells:spellLevel0, changeSettings}) }
      { SpellLevel({level:'1', change, stock:stock['1'], spells:spellLevel1, changeSettings}) }
      { SpellLevel({level:'2', change, stock:stock['2'], spells:spellLevel2, changeSettings}) }
    </div>
    <div id='magic' className='pure-g'>
      <div className='pure-u-1 pure-u-lg-1-24' />
      { SpellLevel({level:'3', change, stock:stock['3'], spells:spellLevel3, changeSettings}) }
      { SpellLevel({level:'4', change, stock:stock['4'], spells:spellLevel4, changeSettings}) }
      { SpellLevel({level:'5', change, stock:stock['5'], spells:spellLevel5, changeSettings}) }
    </div>
    <div id='magic' className='pure-g'>
      <div className='pure-u-1 pure-u-lg-1-24' />
      { SpellLevel({level:'6', change, stock:stock['6'], spells:spellLevel6, changeSettings}) }
      { SpellLevel({level:'7', change, stock:stock['7'], spells:spellLevel7, changeSettings}) }
      { SpellLevel({level:'8', change, stock:stock['8'], spells:spellLevel8, changeSettings}) }
    </div>
    <div id='magic' className='pure-g'>
      <div className='pure-u-1 pure-u-lg-1-24' />
      { SpellLevel({level:'9', change, stock:stock['9'], spells:spellLevel9, changeSettings}) }
    </div>
  </div>

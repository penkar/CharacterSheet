import React from 'react'
import SpellLevel from './SpellLevel'

const magicComponent = ({stock, spellLevel0, spellLevel1, spellLevel2, spellLevel3, spellLevel4, spellLevel5, spellLevel6, spellLevel7, spellLevel8, spellLevel9}, func) => {
  return (
    <div id='magic'>
      <div className='pure-g'>
        <div className='pure-u-1 pure-u-lg-1-24' />
        <SpellLevel level='0' change={func} stock={stock['0']} spells={spellLevel0}/>
        <SpellLevel level='1' change={func} stock={stock['1']} spells={spellLevel1}/>
        <SpellLevel level='2' change={func} stock={stock['2']} spells={spellLevel2}/>
      </div>
      <div id='magic' className='pure-g'>
        <div className='pure-u-1 pure-u-lg-1-24' />
        <SpellLevel level='3' change={func} stock={stock['3']} spells={spellLevel3}/>
        <SpellLevel level='4' change={func} stock={stock['4']} spells={spellLevel4}/>
        <SpellLevel level='5' change={func} stock={stock['5']} spells={spellLevel5}/>
      </div>
      <div id='magic' className='pure-g'>
        <div className='pure-u-1 pure-u-lg-1-24' />
        <SpellLevel level='6' change={func} stock={stock['6']} spells={spellLevel6}/>
        <SpellLevel level='7' change={func} stock={stock['7']} spells={spellLevel7}/>
        <SpellLevel level='8' change={func} stock={stock['8']} spells={spellLevel8}/>
      </div>
      <div id='magic' className='pure-g'>
        <div className='pure-u-1 pure-u-lg-1-24' />
        <SpellLevel level='9' change={func} stock={stock['9']} spells={spellLevel9}/>
      </div>
    </div>
  );
}

export default magicComponent

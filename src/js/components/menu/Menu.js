import React from 'react'

const func = (id) => (document.getElementById(id).scrollIntoView());

const Menu = () => (
  <div id='menu'>
    <a onClick={()=>{func('header1')}}>Header 1</a>
    <a onClick={()=>{func('inspiration')}}>Inspiration</a>
    <a onClick={()=>{func('ability')}}>Abilities</a>
    <a onClick={()=>{func('skills')}}>Skills</a>
    <a onClick={()=>{func('armorClass')}}>AC / Initiative / Speed</a>
    <a onClick={()=>{func('hitPoints')}}>Hit Points</a>
    <a onClick={()=>{func('hitdie')}}>Hit Die / Saves</a>
    <a onClick={()=>{func('attacks')}}>Attacks</a>
    <a onClick={()=>{func('equiptment')}}>Equiptment</a>
    <a onClick={()=>{func('personalitytraits')}}>Personality Traits</a>
    <a onClick={()=>{func('ideals')}}>Ideals</a>
    <a onClick={()=>{func('bonds')}}>Bonds</a>
    <a onClick={()=>{func('flaws')}}>Flaws</a>
    <a onClick={()=>{func('featuresandtraits')}}>Feats and Traits</a>
    <a onClick={()=>{func('passivewisdom')}}>Passive Wisdom</a>
    <a onClick={()=>{func('proficienciesandlanguages')}}>Profs and Langs</a>
    <a onClick={()=>{func('header2')}}>Header</a>
    <a onClick={()=>{func('appearance')}}>Appearance</a>
    <a onClick={()=>{func('treasure')}}>Treasure</a>
    <a onClick={()=>{func('backstory')}}>Backstory</a>
    <a onClick={()=>{func('allies')}}>Allies</a>
    <a onClick={()=>{func('addl')}}>Addl Feats and Traits</a>
    <a onClick={()=>{func('header3')}}>Header 3</a>
    <a onClick={()=>{func('magic')}}>Magic</a>
  </div>
)

export default Menu

import React from 'react'
const func = (id) => (document.getElementById(id).scrollIntoView());
export function Menu() {
  return (
    <div id='menu'>
      <a onClick={function(){func('header1')}}>Header 1</a>
      <a onClick={function(){func('inspiration')}}>Inspiration</a>
      <a onClick={function(){func('ability')}}>Abilities</a>
      <a onClick={function(){func('skills')}}>Skills</a>
      <a onClick={function(){func('armorClass')}}>AC / Initiative / Speed</a>
      <a onClick={function(){func('hitPoints')}}>Hit Points</a>
      <a onClick={function(){func('hitdie')}}>Hit Die / Saves</a>
      <a onClick={function(){func('attacks')}}>Attacks</a>
      <a onClick={function(){func('equiptment')}}>Equiptment</a>
      <a onClick={function(){func('personalitytraits')}}>Personality Traits</a>
      <a onClick={function(){func('ideals')}}>Ideals</a>
      <a onClick={function(){func('bonds')}}>Bonds</a>
      <a onClick={function(){func('flaws')}}>Flaws</a>
      <a onClick={function(){func('featuresandtraits')}}>Feats and Traits</a>
      <a onClick={function(){func('passivewisdom')}}>Passive Wisdom</a>
      <a onClick={function(){func('proficienciesandlanguages')}}>Profs and Langs</a>
      <a onClick={function(){func('header2')}}>Header</a>
      <a onClick={function(){func('appearance')}}>Appearance</a>
      <a onClick={function(){func('treasure')}}>Treasure</a>
      <a onClick={function(){func('backstory')}}>Backstory</a>
      <a onClick={function(){func('allies')}}>Allies</a>
      <a onClick={function(){func('addl')}}>Addl Feats and Traits</a>
      <a onClick={function(){func('header3')}}>Header 3</a>
      <a onClick={function(){func('magic')}}>Magic</a>
    </div>
  )
}

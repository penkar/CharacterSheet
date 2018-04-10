import React from 'react'
import {Input} from '../generics'

export const Header1 = (props, change) => (
  <div id='header1' className='pure-g sectional'>
    <div className='pure-u-1-2 pure-u-lg-2-24' />

    <div className='pure-u-1 pure-u-lg-4-24'>
      { Input({placeholder:'Character Name', value:props.characterName, specific:'', field:'characterName', change}) }
      <div>Character Name</div>
    </div>

    <div className='pure-u-1-2 pure-u-lg-4-24'>
      { Input({placeholder:'Class', value:props.class, specific:'', field:'class', change:change}) }
      <div>Class & Level</div>
      { Input({placeholder:'Race', value:props.race, specific:'', field:'race', change}) }
      <div>Race</div>
    </div>

    <div className='pure-u-1-2 pure-u-lg-4-24'>
      { Input({placeholder:'Background', value:props.background, specific:'', field:'background', change}) }
      <div>Background</div>
      { Input({placeholder:'Alignment', value:props.alignment, specific:'', field:'alignment', change}) }
      <div>Alignment</div>
    </div>


    <div className='pure-u-1-2 pure-u-lg-4-24'>
      { Input({placeholder:'Player Name', value:props.playerName, specific:'', field:'playerName', change}) }
      <div>Player Name</div>
      { Input({placeholder:'Experience Points', value:props.experiencePoints || '', specific:'', field:'experiencePoints', change}) }
      <div>Experience Points</div>
    </div>


    <div className='pure-u-1-2 pure-u-lg-4-24'>
      { Input({placeholder:'Faction', value:props.faction, specific:'', field:'faction', change}) }
      <div>Faction</div>
      { Input({placeholder:'DCI Number', value:props.dciNumber || '', specific:'', field:'dciNumber', change}) }
      <div>DCI Number</div>
    </div>
  </div>
);

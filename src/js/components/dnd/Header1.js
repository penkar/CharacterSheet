import React from 'react'
import {Input} from '../generics'

const Header1 = (props, change) => (
  <div id='header1'>
    <div className='header-row'>
      <div>&nbsp;</div>
      <div className='ll t'>
        <Input placeholder={props.class} value={props.class} specific='' field='class' change={change}/>
      </div>
      <div className='t'>
        <Input placeholder={props.background} value={props.background} specific='' field='background' change={change}/>
      </div>
      <div className='t'>
        <Input placeholder={props.playerName} value={props.playerName} specific='' field='playerName' change={change}/>
      </div>
      <div className='rr t'>
        <Input placeholder={props.faction} value={props.faction} specific='' field='faction' change={change}/>
      </div>
    </div>
    <div className='header-row'>
      <div>&nbsp;</div>
      <div className='ll'>Class & Level</div>
      <div>Background</div>
      <div>Player Name</div>
      <div className='rr'>Faction</div>
    </div>
    <div className='header-row'>
      <div className='ll t b'>
        <Input placeholder={props.characterName} value={props.characterName} specific='' field='characterName' change={change}/>
      </div>
      <div>
        <Input placeholder={props.race} value={props.race} specific='' field='race' change={change}/>
      </div>
      <div>
        <Input placeholder={props.alignment} value={props.alignment} specific='' field='alignment' change={change}/>
      </div>
      <div>
        <Input placeholder={props.experiencePoints} value={props.experiencePoints} specific='' field='experiencePoints' change={change}/>
      </div>
      <div className='rr'>
        <Input placeholder={props.dciNumber} value={props.dciNumber} specific='' field='dciNumber' change={change}/>
      </div>
    </div>
    <div className='header-row'>
      <div>Character Name</div>
      <div className='ll b'>Race</div>
      <div className='b'>Alignment</div>
      <div className='b'>Experience Points</div>
      <div className='rr b'>DCI Number</div>
    </div>
  </div>
);

export default Header1

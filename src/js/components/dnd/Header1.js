import React from 'react'
import {Input} from '../generics'

const Header1 = (props, change) => (
  <div id='header1' className='pure-g sectional'>
    <div className='pure-u-1-2 pure-u-lg-2-24' />

    <div className='pure-u-1 pure-u-lg-4-24'>
      <div className='ll t b'>
        <Input placeholder='Character Name' value={props.characterName} specific='' field='characterName' change={change}/>
      </div>
      <div>Character Name</div>
    </div>

    <div className='pure-u-1-2 pure-u-lg-4-24'>
      <div className='ll t'>
        <Input placeholder='Class' value={props.class} specific='' field='class' change={change}/>
      </div>
      <div className='ll'>Class & Level</div>
      <div>
        <Input placeholder='Race' value={props.race} specific='' field='race' change={change}/>
      </div>
      <div className='ll b'>Race</div>
    </div>

    <div className='pure-u-1-2 pure-u-lg-4-24'>
      <div className='t'>
        <Input placeholder='Background' value={props.background} specific='' field='background' change={change}/>
      </div>
      <div>Background</div>
      <div>
        <Input placeholder='Alignment' value={props.alignment} specific='' field='alignment' change={change}/>
      </div>
      <div className='b'>Alignment</div>
    </div>


    <div className='pure-u-1-2 pure-u-lg-4-24'>
      <div className='t'>
        <Input placeholder='Player Name' value={props.playerName} specific='' field='playerName' change={change}/>
      </div>
      <div>Player Name</div>
      <div>
        <Input placeholder='Experience Points' value={props.experiencePoints || ''} specific='' field='experiencePoints' change={change}/>
      </div>
      <div className='b'>Experience Points</div>
    </div>


    <div className='pure-u-1-2 pure-u-lg-4-24'>
      <div className='rr t'>
        <Input placeholder='Faction' value={props.faction} specific='' field='faction' change={change}/>
      </div>
      <div className='rr'>Faction</div>
      <div className='rr'>
        <Input placeholder='DCI Number' value={props.dciNumber || ''} specific='' field='dciNumber' change={change}/>
      </div>
      <div className='rr b'>DCI Number</div>
    </div>
  </div>
);

export default Header1

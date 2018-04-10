import React from 'react'
import {Input} from '../generics'
export const Header2 = (props, change) => (
  <div id='header2' className='pure-g sectional'>
    <div className='pure-u-1 pure-u-lg-2-24' />

    <div className='pure-u-1 pure-u-lg-5-24'>
      { Input({placeholder:'Character Name', value:props.characterName, specific:'', field:'characterName', change}) }
      <div>Character Name</div>
    </div>

    <div className='pure-u-1-2 pure-u-lg-5-24'>
      { Input({placeholder:'Age', value:props.age || '', specific:'', field:'age', change}) }
      <div>Age</div>
      { Input({placeholder:'Eyes', value:props.eyes || '', specific:'', field:'eyes', change}) }
      <div>Eyes</div>
    </div>

    <div className='pure-u-1-2 pure-u-lg-5-24'>
      { Input({placeholder:'Height', value:props.height || '', specific:'', field:'height', change}) }
      <div>Height</div>
      { Input({placeholder:'Skin', value:props.skin || '', specific:'', field:'skin', change}) }
      <div>Skin</div>
    </div>

    <div className='pure-u-1-2 pure-u-lg-5-24'>
      { Input({placeholder:'Weight', value:props.weight || '', specific:'', field:'weight', change}) }
      <div>Weight</div>
      { Input({placeholder:'Hair', value:props.hair || '', specific:'', field:'hair', change}) }
      <div>Hair</div>
    </div>
  </div>
)

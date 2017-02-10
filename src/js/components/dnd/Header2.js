import React from 'react'
import {Input} from '../generics'

const Header2 = (props, change) => (
  <div id='header2'>
    <div className='header-row'>
      <div></div>
      <div className='ll t'>
        <Input placeholder={props.age} value={props.age} specific='' field='age' change={change}/>
      </div>
      <div className='t'>
        <Input placeholder={props.height} value={props.height} specific='' field='height' change={change}/>
      </div>
      <div className='rr t'>
        <Input placeholder={props.weight} value={props.weight} specific='' field='weight' change={change}/>
      </div>
    </div>
    <div className='header-row'>
      <div></div>
      <div className='ll'>Age</div>
      <div>Height</div>
      <div className='rr'>Weight</div>
    </div>
    <div className='header-row'>
      <div className='ll t b'>
        <Input placeholder={props.characterName} value={props.characterName} specific='' field='characterName' change={change}/>
      </div>
      <div>
        <Input placeholder={props.eyes} value={props.eyes} specific='' field='eyes' change={change}/>
      </div>
      <div>
        <Input placeholder={props.skin} value={props.skin} specific='' field='skin' change={change}/>
      </div>
      <div className='rr'>
        <Input placeholder={props.hair} value={props.hair} specific='' field='hair' change={change}/>
      </div>
    </div>
    <div className='header-row'>
      <div>Character Name</div>
      <div className='ll b'>Eyes</div>
      <div className='b'>Skin</div>
      <div className='rr b'>Hair</div>
    </div>
  </div>
)
export default Header2

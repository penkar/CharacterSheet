import React from 'react'
import {Input} from '../generics'

const Header2 = (props, change) => (
  <div id='header2' className='pure-g'>
    <div className='pure-u-1 pure-u-lg-1-4'>
      <div className='ll t b'>
        <Input placeholder='Character Name' value={props.characterName} specific='' field='characterName' change={change}/>
      </div>
      <div>Character Name</div>
    </div>

    <div className='pure-u-1 pure-u-lg-1-4'>
      <div className='ll t'>
        <Input placeholder='Age' value={props.age || ''} specific='' field='age' change={change}/>
      </div>
      <div className='ll'>Age</div>
      <div>
        <Input placeholder='Eyes' value={props.eyes || ''} specific='' field='eyes' change={change}/>
      </div>
      <div className='ll b'>Eyes</div>
    </div>

    <div className='pure-u-1 pure-u-lg-1-4'>
      <div className='t'>
        <Input placeholder='Height' value={props.height || ''} specific='' field='height' change={change}/>
      </div>
      <div>Height</div>
      <div>
        <Input placeholder='Skin' value={props.skin || ''} specific='' field='skin' change={change}/>
      </div>
      <div className='b'>Skin</div>
    </div>

    <div className='pure-u-1 pure-u-lg-1-4'>
      <div className='rr t'>
        <Input placeholder='Weight' value={props.weight || ''} specific='' field='weight' change={change}/>
      </div>
      <div className='rr'>Weight</div>
      <div className='rr'>
        <Input placeholder='Hair' value={props.hair || ''} specific='' field='hair' change={change}/>
      </div>
      <div className='rr b'>Hair</div>
    </div>
  </div>
)
export default Header2

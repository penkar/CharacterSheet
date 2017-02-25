import React from 'react'

const View = (viewCB, modalSetting) => (
  <div id='menu-list'>
    <a onClick={()=>(viewCB('all'))}>See All</a>
    <a onClick={()=>(viewCB('attack'))}>See Attack</a>
    <a onClick={()=>(viewCB('bkgd'))}>See Background</a>
    <a onClick={()=>(modalSetting({setting:true, modalType:'root'}))}>Find a Character</a>
    <a onClick={()=>(modalSetting({setting:true, modalType:'root'}))}>Create a Character</a>
    <a onClick={()=>(console.log('update'))}>Update Character</a>
  </div>
)

export default View

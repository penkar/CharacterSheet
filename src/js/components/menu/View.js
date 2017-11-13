import React from 'react';
export function View(viewCB, modalSetting) {
  return (
    <div id='menu-list'>
      <a onClick={()=>(viewCB('all'))}>See All</a>
      <a onClick={()=>(viewCB('attack'))}>See Attack</a>
      <a onClick={()=>(viewCB('bkgd'))}>See Background</a>
      <a onClick={()=>(modalSetting({setting:true, modalType:'root'}))}>Find a Character</a>
      <a onClick={()=>(modalSetting({setting:true, modalType:'root'}))}>Create a Character</a>
    </div>
  );
}

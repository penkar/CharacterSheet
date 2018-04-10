import React from 'react';
import cn from 'classnames'
export const View = (viewCB, modalSetting, open) => (
  <div id='menu-list' className={cn({open:!open})}>
    <a onClick={()=>(viewCB('all'))}>See All</a>
    <a onClick={()=>(viewCB('attack'))}>See Attack</a>
    <a onClick={()=>(viewCB('bkgd'))}>See Background</a>
    <a onClick={()=>(modalSetting({setting:true, modalType:'root'}))}>Find a Character</a>
    <a onClick={()=>(modalSetting({setting:true, modalType:'root'}))}>Create a Character</a>
  </div>
);

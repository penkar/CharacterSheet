import React from 'react';
import cn from 'classnames';
import Menu from 'react-icons/lib/md/menu';
export const MenuContainer = ({menuOpen, settingsView, user, signout, modalChange, changeMenu}) => (
  <div id='menu-container'>
    <Menu id='menu' onClick={changeMenu}/>
    <div id='menu-list' className={cn({open:menuOpen})}>
      <a onClick={()=>(settingsView('all'))}>See All</a>
      <a onClick={()=>(settingsView('attack'))}>See Attack</a>
      <a onClick={()=>(settingsView('bkgd'))}>See Background</a>
      <a onClick={()=>(settingsView('feat'))}>Add a Feat</a>
      <a onClick={()=>(settingsView('magic'))}>See all Magic Spells</a>
      <a onClick={()=>(modalSetting({setting:true, modalType:'root'}))}>Find a Character</a>
      <a onClick={()=>(modalSetting({setting:true, modalType:'root'}))}>Create a Character</a>
    </div>
  </div>
);

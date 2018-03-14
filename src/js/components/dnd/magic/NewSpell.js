import React from 'react'
export function NewSpell({change, level, i}) {
  let string = '';
  let enter = () => {
    if(!string) return null;
    change({level, newspell:true, value:string});
  }, keypress = (e) => {
    string = e.target.value;
  }
  return (
    <div className='spell' key={`${i}_new`}>
      <input type='checkbox' checked={false}/>
      <input placeholder='Spell Name' onChange={keypress}/>
      <span style={{color:'green', fontSize:'2.5rem', cursor:'pointer'}} onClick={enter}>+</span>
    </div>
  );
}

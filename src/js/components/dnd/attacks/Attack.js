import React from 'react'
var changeattack = ({target}, field, change, value) => {
  let attr = target.getAttribute('data'), val = target.value;
  let values = Object.assign({}, value, {[attr]: val});
  change({value:values, field});
}
export const Attack = ({field, change, value}) => (
  <div className='attack'>
    <input
      data='name'
      value={value.name}
      onChange={(e)=>changeattack(e,field,change,value)}/>
    <input
      data='bonus'
      value={value.bonus}
      onChange={(e)=>changeattack(e,field,change,value)}/>
    <input
      data='dmg'
      value={value.dmg}
      onChange={(e)=>changeattack(e,field,change,value)}/>
  </div>
)

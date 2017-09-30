import React from 'react'
const Attack = ({field, change, value}) => {
  function changeattack(e) {
    let attr = e.target.getAttribute('data'), val = e.target.value;
    let values = Object.assign({}, value, {[attr]: val});
    change({value:values, field});
  }

  return (
    <div className='attack'>
      <input data='name' value={value.name} onChange={changeattack}/>
      <input data='bonus' value={value.bonus} onChange={changeattack}/>
      <input data='dmg' value={value.dmg} onChange={changeattack}/>
    </div>
  )
}
export default Attack

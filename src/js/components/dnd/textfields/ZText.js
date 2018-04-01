import React from 'react'
export const ZText = ({rows, cols, text, id, string, klass, field, change}) => {
  let changeFunc = ({target}) => change({value:target.value, field});
  return (
    <div id={id} className={`ztext sectional ${klass || ''}`}>
      <textarea rows={rows} cols={cols} value={text} onChange={changeFunc}/>
      <br/>
      <span className='bold'>{string}</span>
    </div>
  )
}

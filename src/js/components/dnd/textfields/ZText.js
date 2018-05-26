import React from 'react'
export const ZText = ({rows, cols, text, id, string, klass, field, change}) =>
  <div id={id} className={`ztext sectional ${klass || ''}`}>
    <textarea rows={rows} cols={cols} value={text} onChange={
      ({target}) => change({value:target.value, field})
    }/>
    <br/>
    <span className='bold'>{string}</span>
  </div>

import React from 'react'

export const Cash = ({cash, change, field, name}) => (
  <div className='cash' key={field}>
    <span>{field}</span>
    <input
      value={cash || ''}
      onChange={({target})=>(change({field, value:target.value}))}
      placeholder={name} />
  </div>
)

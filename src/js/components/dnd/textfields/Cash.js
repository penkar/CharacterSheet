import React from 'react'

export const Cash = ({cash, change, field, name}) => (
  <div className='cash' key={field}>
    <span>{field}</span>
    <input
      value={cash || ''}
      onChange={(event)=>(change({field, value:event.target.value}))}
      placeholder={name} />
  </div>
)

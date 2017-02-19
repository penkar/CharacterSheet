import React from 'react'

const Cash = ({cash, change, field, name}) => {
  return (
    <div className='cash' key={field}>
      {field}
      <input
        value={cash || ''}
        onChange={(event)=>(change({field, value:event.target.value}))}
        placeholder={name} />
    </div>
  )
}
export default Cash;

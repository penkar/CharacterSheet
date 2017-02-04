import React from 'react'

const Cash = ({cash, change, field}) => {
  return (
    <div className='cash' key={field}>
      {field}<input value={cash} onChange={change}></input>
    </div>
  )
}
export default Cash;

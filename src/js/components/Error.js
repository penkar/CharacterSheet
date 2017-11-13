import React from 'react'
export function Error(error) {
  return (
    <div id='root'>
      <div className='title error'>ERROR!</div>
      <div className='content'>
        <div>
          <div>{error}</div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
const Error = (error) => (
  <div id='root'>
    <div className='title error'>ERROR!</div>
    <div className='content'>
      <div>
        <div>{error}</div>
      </div>
    </div>
  </div>
)

export default Error

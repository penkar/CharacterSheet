import React from 'react'
export const Error = (error) => (
  <div id='root'>
    <div className='title error'>ERROR!</div>
    <div className='content'>
      <div>{error}</div>
    </div>
  </div>
);

import React from 'react'
export const Error = (error) => (
  <div id='root'>
    <div className='title error'>ERROR!</div>
    <div className='content'><span>{error}</span></div>
  </div>
);

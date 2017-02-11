import React from 'react'
const Loading = (bool) => {
  if(!bool) return null;

  return (
    <div id='loading'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
export default Loading

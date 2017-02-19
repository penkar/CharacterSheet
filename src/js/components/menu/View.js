import React from 'react'

const View = (viewCB) => (
  <div id='menu'>
    <a onClick={()=>(viewCB('all'))}>See All</a>
    <a onClick={()=>(viewCB('attack'))}>See Attack</a>
    <a onClick={()=>(viewCB('magic'))}>See Magic</a>
    <a onClick={()=>(viewCB('equiptment'))}>See Equiptment</a>
    <a onClick={()=>(viewCB('skills'))}>See Skills</a>
  </div>
)

export default View

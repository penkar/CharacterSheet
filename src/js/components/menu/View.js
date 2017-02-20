import React from 'react'

const View = (viewCB) => (
  <div id='menu'>
    <a onClick={()=>(viewCB('all'))}>See All</a>
    <a onClick={()=>(viewCB('attack'))}>See Attack</a>
    <a onClick={()=>(viewCB('magic'))}>See Magic</a>
    <a onClick={()=>(viewCB('eqpt'))}>See Eqpt</a>
    <a onClick={()=>(viewCB('bkgd'))}>See Background</a>
  </div>
)

export default View

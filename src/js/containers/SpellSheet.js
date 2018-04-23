import React from 'react'
import {Spells} from '../components/dnd/magic/Spells1.js'

const SpellSheet = ({filter, change}) => {
  let _onChange = ({target}) => {
    change({key:'filter', value:target.value});
  }, regex = new RegExp(filter, "i");
  return (
    <div className='pure-g' key='spell-sheet'>
      <div key='input' className='pure-u-1 pure-u-lg-24-24 sectional'>
        <input onChange={_onChange} name='spell-filter' placeholder="Filter spells by..." />
      </div>
      { [...Spells]
        .filter( ({name}) => !!name.match(regex) )
        .map( ({name, lvl, cst, desc, dur, rng, type}) =>
        <div key={name} className='pure-u-1 pure-u-lg-24-24 sectional'>
          <div key='name'>Name: {name}</div>
          <div key='lvl'>Level: {lvl}</div>
          <div key='cst'>Casting: {cst}</div>
          <div key='desc'>Description: {desc}</div>
          <div key='dur'>Duration: {dur}</div>
          <div key='r'>Range: {rng}</div>
          <div key='s'>Type: {type}</div>
        </div>
      ) }
    </div>
  )
}
export default SpellSheet;

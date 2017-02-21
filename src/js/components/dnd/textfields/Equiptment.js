import React from 'react'
import Cash from './Cash'

const Equiptment = ({change, text, currency}) => (
  <div id='equiptment' className='sectional'>
    <div>
      <div className='currency'>
        <Cash cash={currency.cp} change={change} name='CP' field='cp'/>
        <Cash cash={currency.sp} change={change} name='SP' field='sp'/>
        <Cash cash={currency.ep} change={change} name='EP' field='ep'/>
        <Cash cash={currency.gp} change={change} name='GP' field='gp'/>
        <Cash cash={currency.pp} change={change} name='PP' field='pp'/>
      </div>
      <textarea value={text} cols='20' rows='6' onChange={(event) => (change({value: event.target.value, field:'equiptment'}))}/>
    </div>
    <span className='bold'>EQUIPTMENT</span>
  </div>
)
export default Equiptment

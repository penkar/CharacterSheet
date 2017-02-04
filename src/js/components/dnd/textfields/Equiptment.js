import React, {Component, PropTypes} from 'react'
import Cash from './Cash'

export default class Equiptment extends Component {
  render() {
    let {text, currency} = this.props;
    return (
      <div id='equiptment'>
        <div className='currency'>
          {Cash({cash: currency.cp, change: ()=>(console.log('a')), field:'CP'})}
          {Cash({cash: currency.sp, change: ()=>(console.log('a')), field:'SP'})}
          {Cash({cash: currency.ep, change: ()=>(console.log('a')), field:'EP'})}
          {Cash({cash: currency.gp, change: ()=>(console.log('a')), field:'GP'})}
          {Cash({cash: currency.pp, change: ()=>(console.log('a')), field:'PP'})}
        </div>
        <textarea value={text} cols='33' rows='15'/>
      </div>
    )
  }
}

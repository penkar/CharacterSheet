import React, {Component, PropTypes} from 'react'
import Cash from './Cash'

export default class Equiptment extends Component {
  static propTypes = {
    change: PropTypes.func,
    text: PropTypes.string,
    currency: PropTypes.object,
  }

  _onChange(e) {
    let value = e.target.value, {change} = this.props;
    change({value, field:'equiptment'})
  }

  render() {
    let {text, currency, change} = this.props;
    return (
      <div id='equiptment'>
        <div className='currency'>
          <Cash cash={currency.cp} change={change} name='CP' field='cp'/>
          <Cash cash={currency.sp} change={change} name='SP' field='sp'/>
          <Cash cash={currency.ep} change={change} name='EP' field='ep'/>
          <Cash cash={currency.gp} change={change} name='GP' field='gp'/>
          <Cash cash={currency.pp} change={change} name='PP' field='pp'/>
        </div>
        <textarea value={text} cols='20' rows='6' onChange={::this._onChange}/>
        <span className='bold'>EQUIPTMENT</span>
      </div>
    )
  }
}

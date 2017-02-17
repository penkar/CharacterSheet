import React, {Component, PropTypes} from 'react'
import {modifierFunc} from '../../utilities/scoreutilities'

export default class Ability extends Component {
  static propTypes = {
    modifier: PropTypes.number,
    value: PropTypes.number,
    field: PropTypes.string,
    change: PropTypes.func,
  }

  _change(e) {
    let {change, field} = this.props, modifier = parseInt(this.mod.value || '0'), value = parseInt(this.scr.value || '0');
    change({value, modifier, field, skill:true})
  }

  render() {
    let {field, placeholder, value, modifier} = this.props;
    return (
      <div key={`${field}_ability`} className='ability pure-u-1'>
        <div>
          <span className='clearfix bold'>{field}</span>
          <br/>
          <input className='score'
            value={value}
            ref={(el)=>(this.scr = el)}
            onChange={::this._change}/>
        </div>
        <input className='modifier'
          value={modifier || ''}
          placeholder={modifierFunc(value)}
          ref={(el)=>(this.mod = el)}
          onChange={::this._change}/>
      </div>
    )
  }
}

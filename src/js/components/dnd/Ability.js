import React, {Component, PropTypes} from 'react'

export default class Ability extends Component {
  static propTypes = {
    modifier: PropTypes.number,
    value: PropTypes.number,
    field: PropTypes.string,
    change: PropTypes.func,
  }

  _changeScore(e) {
    let {change, field} = this.props, modifier = parseInt(this.mod.value || '0'), value = parseInt(this.scr.value || '0');
    change({value, modifier, field, skill:true})
  }

  _modifier(value) {
    let m = value < 10 ? 1 : 0;
    return parseInt(((value - m) / 2) - 5)
  }

  render() {
    let {field, placeholder, value, modifier} = this.props;
    return (
      <div key={`${field}_ability`} className='ability'>
        <div>
          <span className='clearfix'>{field}</span>
          <input className='score' value={value} ref={(el)=>(this.scr = el)} onChange={::this._changeScore}/>
        </div>
        <input className='modifier' value={modifier || ''} placeholder={::this._modifier(value)} ref={(el)=>(this.mod = el)}/>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'

export default class Score extends Component {
  static propTypes = {
    field: PropTypes.string,
    obj: PropTypes.object,
    name: PropTypes.string,
    change: PropTypes.func,
    pro: PropTypes.number,
    mod: PropTypes.number,
  }

  _onChange() {
    let {change, field,} = this.props, value = this.in.value;
    change({field, value, ability:true,})
  }

  _onChangeRadio() {
    let {change, field,} = this.props, checked = this.ck.checked;
    change({field, checked, radio:true,})
  }

  render() {
    let {obj, name, mod} = this.props;
    let placeholder = obj.placeholder + mod;
    if(obj.checked) placeholder += 2;
    // console.log(name, obj.checked)
    return (
      <div className='score'>
        <input
          onChange={::this._onChangeRadio}
          checked={obj.checked}
          type='checkbox'
          ref={(el)=>(this.ck = el)}/>
        <input
          onChange={::this._onChange}
          placeholder={placeholder}
          value={obj.value || ''}
          ref={(el)=>(this.in = el)}/>
        <span>&nbsp;{name}</span>
      </div>
    )
  }
}

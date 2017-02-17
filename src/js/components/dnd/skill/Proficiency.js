import React, {Component, PropTypes} from 'react'

export default class Proficiency extends Component {
  static propTypes = {
    placeholder: PropTypes.number,
    value: PropTypes.number,
    change: PropTypes.func,
  }

  shouldComponentUpdate(next) {
    let {value, placeholder} = this.props;
    if(next.value === value && placeholder === next.placeholder) {
      return false;
    }
    return true;
  }

  _change(e) {
    let {change} = this.props, value = e.target.value;
    change({field:'proficiencyBonus', value, affiliate:true});
  }

  render() {
    let {placeholder, value,}  = this.props;
    return (
      <div id='proficiency'>
        <input placeholder={placeholder} value={value || ''} onChange={::this._change}/><span className='bold'>Proficiency</span>
      </div>
    )
  }
}

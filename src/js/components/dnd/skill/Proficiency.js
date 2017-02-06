import React, {Component, PropTypes} from 'react'

export default class Proficiency extends Component {
  static propTypes = {
    placeholder: PropTypes.number,
    value: PropTypes.number,
    change: PropTypes.func,
  }

  _change(e) {
    let {change} = this.props, value = e.target.value;
    change({field:'proficiencyBonus', value, affiliate:true});
  }

  render() {
    let {placeholder, value,}  = this.props;
    return (
      <div id='proficiency'>
        <input placeholder={placeholder} value={value || ''} onChange={::this._change}/><span>Proficiency</span>
      </div>
    )
  }
}

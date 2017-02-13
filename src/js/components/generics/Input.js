import React, {Component, PropTypes} from 'react'

export default class Input extends Component {
  static propTypes = {
    change: PropTypes.func,
    placeholder: PropTypes.any,
    value: PropTypes.any,
    specific: PropTypes.string,
    field: PropTypes.string,
  }

  _change(e) {
    let {change, field} = this.props;
    let value = e.target.value;
    change({field, value});
  }

  render() {
    let {specific, placeholder, value} = this.props;
    return (
      <input
        className={`input-field ${specific}`}
        placeholder={placeholder}
        value={value}
        onChange={::this._change}
        />
    )
  }
}

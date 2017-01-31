import React, {Component, PropTypes} from 'react'
import cn from 'classnames'

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    specific: PropTypes.string,
  }

  _change() {
    console.log(10);
  }

  render() {
    let {specific, placeholder, value} = this.props;
    return (
      <input
        className={cn('input-field', specific)}
        placeholder={placeholder}
        value={value}
        onChange={::this._change}
        />
    )
  }
}

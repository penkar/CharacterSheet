import React, {PropTypes, Component} from 'react'

export default class Field extends Component {
  static propTypes = {
    value: PropTypes.number,
    field: PropTypes.string,
    name: PropTypes.string,
    change: PropTypes.func,
  }

  shouldComponentUpdate(next) {
    let {value} = this.props;
    if(value === next.value) return false;
    return true;
  }

  _change(e) {
    let value = e.target.value, {change, field} = this.props;
    change({field, value});
  }

  render() {
    let {name, field, value} = this.props;
    return (
      <div id={field} key={field}>
        <input value={value} onChange={::this._change}/>
        <span>{name}</span>
      </div>
    )
  }
}

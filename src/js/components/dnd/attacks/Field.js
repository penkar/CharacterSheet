import React, {PropTypes, Component} from 'react'

export default class Field extends Component {
  static propTypes = {
    value: PropTypes.number,
    field: PropTypes.string,
    name: PropTypes.string,
  }

  render() {
    let {name, field, value} = this.props;
    return (
      <div id={field} key={field}>
        <input value={value} />
        <span>{name}</span>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'

export default class Treasure extends Component {
  static propTypes = {
    text: PropTypes.string,
    field: PropTypes.string,
    change: PropTypes.func,
  }

  _onChange(e) {
    let value = e.target.value, {change, field} = this.props;
    change({value, field});
  }

  render() {
    return (
      <div id='treasure'>
        <textarea rows='12' cols='66' value={this.props.text} id='proficiencies' onChange={::this._onChange}/>
        Treasure
      </div>
    )
  }
}

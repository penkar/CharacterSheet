import React, {Component, PropTypes} from 'react'

export default class Bonds extends Component {
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
      <div id='bonds'>
        <textarea rows='4' cols='33' value={this.props.text} id='proficiencies' onChange={::this._onChange}/>
        Bonds
      </div>
    )
  }
}

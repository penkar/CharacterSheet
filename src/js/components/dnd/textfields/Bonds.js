import React, {Component, PropTypes} from 'react'

export default class Bonds extends Component {
  static propTypes = {
    text: PropTypes.string,
    field: PropTypes.string,
  }

  render() {
    return (
      <div id='bonds'>
        <textarea rows='4' cols='33' value={this.props.text} id='proficiencies'/>
        Bonds
      </div>
    )
  }
}

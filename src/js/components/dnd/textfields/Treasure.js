import React, {Component, PropTypes} from 'react'

export default class Treasure extends Component {
  static propTypes = {
    text: PropTypes.string,
    field: PropTypes.string,
  }

  render() {
    return (
      <div id='treasure'>
        <textarea rows='12' cols='66' value={this.props.text} id='proficiencies'/>
        Treasure
      </div>
    )
  }
}

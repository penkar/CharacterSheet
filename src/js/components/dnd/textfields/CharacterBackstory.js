import React, {Component, PropTypes} from 'react'

export default class CharacterBackstory extends Component {
  static propTypes = {
    text: PropTypes.string,
    field: PropTypes.string,
  }

  render() {
    return (
      <div id='backstory'>
        <textarea rows='26' cols='33' value={this.props.text} id='proficiencies'/>
        CHARACTER BACKSTORY
      </div>
    )
  }
}

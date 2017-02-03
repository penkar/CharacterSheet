// characterApperance
import React, {Component, PropTypes} from 'react'

export default class CharacterApperance extends Component {
  static propTypes = {
    text: PropTypes.string,
    field: PropTypes.string,
  }

  render() {
    return (
      <div id='apperance'>
        <textarea rows='13' cols='33' value={this.props.text} id='proficiencies'/>
        CHARACTER APPEARANCE
      </div>
    )
  }
}

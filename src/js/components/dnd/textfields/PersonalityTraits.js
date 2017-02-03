import React, {Component, PropTypes} from 'react'

export default class PersonalityTraits extends Component {
  static propTypes = {
    text: PropTypes.string,
    field: PropTypes.string,
  }

  render() {
    return (
      <div id='personalitytraits'>
        <textarea rows='4' cols='33' value={this.props.text} id='proficiencies'/>
        Personality Traits
      </div>
    )
  }
}

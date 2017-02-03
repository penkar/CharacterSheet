import React, {Component, PropTypes} from 'react'

export default class AddlFeaturesAndTraits extends Component {
  static propTypes = {
    text: PropTypes.string,
    field: PropTypes.string,
  }

  render() {
    return (
      <div id='addl'>
        <textarea rows='12' cols='66' value={this.props.text} id='proficiencies'/>
        ADDITIONAL FEATURES & TRAITS
      </div>
    )
  }
}

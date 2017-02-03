import React, {Component, PropTypes} from 'react'

export default class FeaturesAndTraits extends Component {
  static propTypes = {
    text: PropTypes.string,
    field: PropTypes.string,
  }

  render() {
    return (
      <div id='featuresandtraits'>
        <textarea rows='13' cols='33' value={this.props.text} id='proficiencies'/>
        FEATURES & TRAITS
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'

export default class ProficienciesAndLanguages extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    return (
      <div id='proficienciesandlanguages'>
        <textarea rows='13' cols='33' value={this.props.text} id='proficiencies'/>
        OTHER PROFICIENCIES & LANGUAGES
      </div>
    )
  }
}

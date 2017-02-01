import React, {Component, PropTypes} from 'react'

export default class Proficiency extends Component {
  static propTypes = {
    placeholder: PropTypes.number,
    value: PropTypes.number,
  }

  render() {
    return (
      <div id='proficiency'>
        <input /><span>Proficiency</span>
      </div>
    )
  }
}

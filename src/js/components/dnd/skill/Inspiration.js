import React, {Component, PropTypes} from 'react'

export default class Inspiration extends Component {
  static propTypes = {
    placeholder: PropTypes.number,
    value: PropTypes.number,
  }

  render() {
    return (
      <div id='inspiration'>
        <input /><span>Inspriation</span>
      </div>
    )
  }
}

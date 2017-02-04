import React, {Component, PropTypes} from 'react'

export default class DeathSaves extends Component {
  static propTypes = {
    failures: PropTypes.number,
    successes: PropTypes.number,
  }
  render() {
    return (
      <div id='deathsaves'>
        <div>
          Successes
        </div>

        <div>
          Failures
        </div>

        <div>DeathSaves</div>
      </div>
    )
  }
}

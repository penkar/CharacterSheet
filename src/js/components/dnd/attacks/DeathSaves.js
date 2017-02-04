import React, {Component, PropTypes} from 'react'

export default class DeathSaves extends Component {
  static propTypes = {
    failures: PropTypes.number,
    successes: PropTypes.number,
  }
  render() {
    let {failures, successes} = this.props;
    return (
      <div id='deathsaves'>
        <div>
          Successes
          <input type='radio' checked={successes > 0} />=
          <input type='radio' checked={successes > 1} />=
          <input type='radio' checked={successes > 2} />
        </div>

        <div>
          Failures
          <input type='radio' checked={failures > 0} />=
          <input type='radio' checked={failures > 1} />=
          <input type='radio' checked={failures > 2} />
        </div>

        <div>DeathSaves</div>
      </div>
    )
  }
}

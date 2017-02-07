import React, {Component, PropTypes} from 'react'

export default class DeathSaves extends Component {
  static propTypes = {
    failures: PropTypes.number,
    successes: PropTypes.number,
    change: PropTypes.func,
  }

  shouldComponentUpdate(next) {
    let {failures, successes} = this.props;
    if(failures === next.failures && successes === next.successes) return false;
    return true;
  }

  _success(e) {
    let value = e.target.value, {change, field} = this.props;
    if(this.props.successes == value) value = '0';
    change({field:'successes', value});
  }

  _fail(e) {
    let value = e.target.value, {change, field} = this.props;
    if(this.props.failures == value) value = '0';
    change({field:'failures', value});
  }

  render() {
    let {failures, successes} = this.props;
    return (
      <div id='deathsaves'>
        <div>
          Successes
          <input type='radio' checked={successes > 0} value='1' onChange={::this._success}/>=
          <input type='radio' checked={successes > 1} value='2' onChange={::this._success}/>=
          <input type='radio' checked={successes > 2} value='3' onChange={::this._success}/>
        </div>

        <div>
          Failures
          <input type='radio' checked={failures > 0} value='1' onChange={::this._fail}/>=
          <input type='radio' checked={failures > 1} value='2' onChange={::this._fail}/>=
          <input type='radio' checked={failures > 2} value='3' onChange={::this._fail}/>
        </div>

        <div>DeathSaves</div>
      </div>
    )
  }
}

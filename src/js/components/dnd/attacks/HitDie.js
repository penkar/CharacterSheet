import React, {PropTypes, Component} from 'react'

export default class HitDie extends Component {
  static propTypes = {
    hitDie: PropTypes.number,
    hitDieTotal: PropTypes.string,
    change: PropTypes.func,
  }

  _changeH(e) {
    let value = e.target.value, {change, field} = this.props;
    change({field:'hitDice', value});
  }

  _changeT(e) {
    let value = e.target.value, {change, field} = this.props;
    change({field:'hitDiceTotal', value});
  }

  render() {
    let {hitDie, hitDieTotal} = this.props;
    return(
      <div id='hitdie'>
        <div>
          Total: <input value={hitDie} onChange={::this._changeH}/>
        </div>
        <textarea rows='5' cols='10' value={hitDieTotal} onChange={::this._changeT}/>
        <span>HIT DICE</span>
      </div>
    )
  }
}

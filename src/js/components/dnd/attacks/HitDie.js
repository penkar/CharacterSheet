import React, {PropTypes, Component} from 'react'

export default class HitDie extends Component {
  static propTypes = {
    hitDie: PropTypes.number,
    hitDieTotal: PropTypes.number,
  }

  render() {
    let {hitDie, hitDieTotal} = this.props;
    return(
      <div id='hitdie'>
        <div>
          Total: <input value={hitDie}/>
        </div>
        <textarea row='5' cols='10'/>
        <span>HIT DICE</span>
      </div>
    )
  }
}

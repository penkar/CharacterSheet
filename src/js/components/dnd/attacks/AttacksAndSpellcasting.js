import React, {Component, PropTypes} from 'react'
import Attack from './Attack'

export default class AttacksAndSpellcasting extends Component {
  static propTypes = {
    att: PropTypes.string,
    att1: PropTypes.object,
    att2: PropTypes.object,
    att3: PropTypes.object,
    change: PropTypes.func,
  }

  _onChange(e) {
    let value = e.target.value, {change, field} = this.props;
    change({value, field:'attacksAndSpellcasting'});
  }

  render() {
    let {att, att1, att2, att3, change, } = this.props;
    return (
      <div id='attacks'>
        <div className='attack'>
          <div>Name</div>
          <div>Atk Bonus</div>
          <div>Damage/Type</div>
        </div>
        <Attack field='attack1' value={att1} change={change}/>
        <Attack field='attack2' value={att2} change={change}/>
        <Attack field='attack3' value={att3} change={change}/>

        <textarea value={att} rows='6' onChange={::this._onChange} />
        Attacks & Spellcasting
      </div>
    )
  }
}

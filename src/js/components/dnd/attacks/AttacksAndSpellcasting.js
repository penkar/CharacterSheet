import React, {Component, PropTypes} from 'react'
import Attack from './Attack'

export default class AttacksAndSpellcasting extends Component {
  static propTypes = {
    att: PropTypes.string,
    att1: PropTypes.object,
    att2: PropTypes.object,
    att3: PropTypes.object,
  }

  render() {
    let {att, att1, att2, att3, } = this.props;
    return (
      <div id='attacks'>
        <div className='attack'>
          <div>Name</div>
          <div>Atk Bonus</div>
          <div>Damage/Type</div>
        </div>
        <Attack field='attack1' value={att1}/>
        <Attack field='attack2' value={att2}/>
        <Attack field='attack3' value={att3}/>

        <textarea value={att} rows='18'></textarea>
        Attacks & Spellcasting
      </div>
    )
  }
}

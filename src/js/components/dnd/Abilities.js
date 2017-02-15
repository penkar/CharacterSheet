import React, {Component, PropTypes} from 'react'
import Ability from './Ability'

export default class Abilities extends Component {
  static propTypes = {
    strength: PropTypes.object,
    dexterity: PropTypes.object,
    constitution: PropTypes.object,
    intelligence: PropTypes.object,
    wisdom: PropTypes.object,

    change: PropTypes.func,
  }

  render() {
    let {strength, dexterity, constitution, intelligence, wisdom, charisma, change} = this.props;
    return (
      <div id='ability' className='pure-g'>
        <Ability {...strength} field='strength' change={change}/>
        <Ability {...dexterity} field='dexterity' change={change}/>
        <Ability {...constitution} field='constitution' change={change}/>
        <Ability {...intelligence} field='intelligence' change={change}/>
        <Ability {...wisdom} field='wisdom' change={change}/>
        <Ability {...charisma} field='charisma' change={change}/>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'
import Ability from './Ability'

export default class Abilities extends Component {
  static propTypes = {
    strength: PropTypes.object,
    dexterity: PropTypes.object,
    constitution: PropTypes.object,
    intelligence: PropTypes.object,
    wisdom: PropTypes.object,
  }

  render() {
    let {strength, dexterity, constitution, intelligence, wisdom, charisma} = this.props;
    return (
      <div id='ability'>
        <Ability {...strength} field='strength'/>
        <Ability {...dexterity} field='dexterity'/>
        <Ability {...constitution} field='constitution'/>
        <Ability {...intelligence} field='intelligence'/>
        <Ability {...wisdom} field='wisdom'/>
        <Ability {...charisma} field='charisma'/>
      </div>
    )
  }
}

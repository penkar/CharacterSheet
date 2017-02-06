import React, {Component, PropTypes} from 'react'
import Score from './Score'
import {getModifier} from '../../../utilities/scoreutilities'

export default class SavingThrows extends Component {
  static propTypes = {
    strengthSaving: PropTypes.object,
    dexteritySaving: PropTypes.object,
    constitutionSaving: PropTypes.object,
    intelligenceSaving: PropTypes.object,
    wisdomSaving: PropTypes.object,
    charismaSaving: PropTypes.object,

    change: PropTypes.func,
    pro: PropTypes.number,
    abi: PropTypes.object,
  }

  render() {
    let {props} = this, {change, pro, abi,} = this.props;
    let stuff = {change, pro}
    return (
      <div id='savingthrows'>
        <Score {...stuff} field='strengthSaving' name='Strength' obj={props.strengthSaving}  mod={getModifier(abi, 'str')}/>
        <Score {...stuff} field='dexteritySaving' name='Dexterity' obj={props.dexteritySaving}  mod={getModifier(abi, 'dex')}/>
        <Score {...stuff} field='constitutionSaving' name='Constitution' obj={props.constitutionSaving}  mod={getModifier(abi, 'con')}/>
        <Score {...stuff} field='intelligenceSaving' name='Intelligence' obj={props.intelligenceSaving}  mod={getModifier(abi, 'int')}/>
        <Score {...stuff} field='wisdomSaving' name='Wisdom' obj={props.wisdomSaving}  mod={getModifier(abi, 'wis')}/>
        <Score {...stuff} field='charismaSaving' name='Charisma' obj={props.charismaSaving}  mod={getModifier(abi, 'cha')}/>
        SavingThrows
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'
import Score from './Score'

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
  }

  render() {
    let {change, pro} = this.props;
    let stuff = {change, pro}
    return (
      <div id='savingthrows'>
        <Score {...stuff} field='strengthSaving' name='Strength' obj={this.props.strengthSaving} />
        <Score {...stuff} field='dexteritySaving' name='Dexterity' obj={this.props.dexteritySaving} />
        <Score {...stuff} field='constitutionSaving' name='Constitution' obj={this.props.constitutionSaving} />
        <Score {...stuff} field='intelligenceSaving' name='Intelligence' obj={this.props.intelligenceSaving} />
        <Score {...stuff} field='wisdomSaving' name='Wisdom' obj={this.props.wisdomSaving} />
        <Score {...stuff} field='charismaSaving' name='Charisma' obj={this.props.charismaSaving} />
        SavingThrows
      </div>
    )
  }
}

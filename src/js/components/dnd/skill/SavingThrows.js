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
  }

  render() {
    return (
      <div id='savingthrows'>
        <Score field='strengthSaving' name='Strength' obj={this.props.strengthSaving} />
        <Score field='dexteritySaving' name='Dexterity' obj={this.props.dexteritySaving} />
        <Score field='constitutionSaving' name='Constitution' obj={this.props.constitutionSaving} />
        <Score field='intelligenceSaving' name='Intelligence' obj={this.props.intelligenceSaving} />
        <Score field='wisdomSaving' name='Wisdom' obj={this.props.wisdomSaving} />
        <Score field='charismaSaving' name='Charisma' obj={this.props.charismaSaving} />
        SavingThrows
      </div>
    )
  }
}

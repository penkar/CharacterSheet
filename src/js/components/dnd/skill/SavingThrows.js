import React, {Component, PropTypes} from 'react'

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
      <div id='savingthrows'>SavingThrows
      </div>
    )
  }
}

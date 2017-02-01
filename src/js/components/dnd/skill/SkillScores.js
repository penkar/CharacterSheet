import React, {Component, PropTypes} from 'react'

export default class SkillScores extends Component {
  static propTypes = {
    acrobatics: PropTypes.object,
    animalHandling: PropTypes.object,
    arcana: PropTypes.object,
    athletics: PropTypes.object,
    deception: PropTypes.object,
    history: PropTypes.object,
    insight: PropTypes.object,
    intimidation: PropTypes.object,
    investigation: PropTypes.object,
    medicine: PropTypes.object,
    nature: PropTypes.object,
    perception: PropTypes.object,
    performance: PropTypes.object,
    persuation: PropTypes.object,
    religion: PropTypes.object,
    sleightOfHand: PropTypes.object,
    stealth: PropTypes.object,
    survival: PropTypes.object,
  }

  render() {
    console.log(this);
    return (
      <div id='skillscores'>SavingThrows
      </div>
    )
  }
}

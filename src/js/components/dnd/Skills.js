import React, {Component, PropTypes} from 'react'
import {Inspiration, Proficiency, SkillScores, SavingThrows,} from './skill/'

export default class Skills extends Component {
  static propTypes = {

  }
  render() {
    let {inspiration, proficiency, strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,} = this.props;
    let saving = {strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,}
    let {acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleightOfHand, stealth, survival} = this.props;
    let skillset = {acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleightOfHand, stealth, survival};

    return (
      <div id='skills'>
        <Inspiration {...inspiration}/>
        <Proficiency {...proficiency}/>
        <SavingThrows {...saving}/>
        <SkillScores {...skillset}/>
      </div>
    )
  }
}

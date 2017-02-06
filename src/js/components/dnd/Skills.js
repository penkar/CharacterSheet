import React, {Component, PropTypes} from 'react'
import {Inspiration, Proficiency, SkillScores, SavingThrows,} from './skill/'

export default class Skills extends Component {
  static propTypes = {

  }
  render() {
    let {change, inspiration, proficiencyBonus, strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,} = this.props;
    let saving = {strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,}
    let {acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleightOfHand, stealth, survival} = this.props;
    let skillset = {acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleightOfHand, stealth, survival};

    let pro = proficiencyBonus.value || proficiencyBonus.placeholder;

    return (
      <div id='skills'>
        <Inspiration {...inspiration} change={change}/>
        <Proficiency {...proficiencyBonus} change={change}/>
        <SavingThrows {...saving} change={change} pro={pro}/>
        <SkillScores {...skillset} change={change} pro={pro}/>
      </div>
    )
  }
}

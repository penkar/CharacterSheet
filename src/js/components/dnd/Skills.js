import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import {Inspiration, Proficiency, SkillScores, SavingThrows,} from './skill/'

const mapStateToProps = (state) => {
  return ({
    abi: state.abilityReducer,
  })
}

class Skills extends Component {
  static propTypes = {
    abi: PropTypes.object,
    acrobatics: PropTypes.object,
    animalHandling: PropTypes.object,
    arcana: PropTypes.object,
    athletics: PropTypes.object,
    change: PropTypes.func,
    charismaSaving: PropTypes.object,
    constitutionSaving: PropTypes.object,
    deception: PropTypes.object,
    dexteritySaving: PropTypes.object,
    history: PropTypes.object,
    insight: PropTypes.object,
    inspiration: PropTypes.object,
    intelligenceSaving: PropTypes.object,
    intimidation: PropTypes.object,
    investigation: PropTypes.object,
    medicine: PropTypes.object,
    nature: PropTypes.object,
    passiveWisdom: PropTypes.object,
    perception: PropTypes.object,
    performance: PropTypes.object,
    persuation: PropTypes.object,
    proficiencyBonus: PropTypes.object,
    religion: PropTypes.object,
    sleightOfHand: PropTypes.object,
    stealth: PropTypes.object,
    strengthSaving: PropTypes.object,
    survival: PropTypes.object,
    wisdomSaving: PropTypes.object,
  }

  render() {
    let {abi, change, inspiration, proficiencyBonus, strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,} = this.props;
    let saving = {strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,}
    let {acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleightOfHand, stealth, survival} = this.props;
    let skillset = {acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleightOfHand, stealth, survival};

    let pro = proficiencyBonus.value || proficiencyBonus.placeholder;

    return (
      <div id='skills'>
        <Inspiration {...inspiration} change={change}/>
        <Proficiency {...proficiencyBonus} change={change}/>
        <SavingThrows {...saving} change={change} pro={pro} abi={abi}/>
        <SkillScores {...skillset} change={change} pro={pro} abi={abi}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Skills)

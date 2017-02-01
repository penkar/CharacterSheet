import React, {Component, PropTypes} from 'react'
import Score from './Score'

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
    return (
      <div id='skillscores'>
        <Score field='acrobatics' name='Acrobatics (Dex)' obj={this.props.acrobatics} />
        <Score field='animalHandling' name='Animal Handling (Wis)' obj={this.props.animalHandling} />
        <Score field='arcana' name='Arcana (Int)' obj={this.props.arcana} />
        <Score field='athletics' name='Athletics (Str)' obj={this.props.athletics} />
        <Score field='deception' name='Deception (Cha)' obj={this.props.deception} />
        <Score field='history' name='History (Int)' obj={this.props.history} />
        <Score field='insight' name='Insight (Wis)' obj={this.props.insight} />
        <Score field='intimidation' name='Intimidation (Cha)' obj={this.props.intimidation} />
        <Score field='investigation' name='Investigation (Int)' obj={this.props.investigation} />
        <Score field='medicine' name='Medicine (Wis)' obj={this.props.medicine} />
        <Score field='nature' name='Nature (Int)' obj={this.props.nature} />
        <Score field='perception' name='Perception (Wis)' obj={this.props.perception} />
        <Score field='performance' name='Performance (Cha)' obj={this.props.performance} />
        <Score field='persuation' name='Persuasion (Cha)' obj={this.props.persuation} />
        <Score field='religion' name='Religion (Int)' obj={this.props.religion} />
        <Score field='sleightOfHand' name='Sleight of Hand (Dex)' obj={this.props.sleightOfHand} />
        <Score field='stealth' name='Stealth (Dex)' obj={this.props.stealth} />
        <Score field='survival' name='Survival (Wis)' obj={this.props.survival} />
        Skills
      </div>
    )
  }
}

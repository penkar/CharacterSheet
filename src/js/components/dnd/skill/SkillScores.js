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

    change: PropTypes.func,
    pro: PropTypes.number,
  }

  render() {
    let {change, pro} = this.props;
    let stuff = {change, pro}
    return (
      <div id='skillscores'>
        <Score {...stuff} field='acrobatics' name='Acrobatics (Dex)' obj={this.props.acrobatics} />
        <Score {...stuff} field='animalHandling' name='Animal Handling (Wis)' obj={this.props.animalHandling} />
        <Score {...stuff} field='arcana' name='Arcana (Int)' obj={this.props.arcana} />
        <Score {...stuff} field='athletics' name='Athletics (Str)' obj={this.props.athletics} />
        <Score {...stuff} field='deception' name='Deception (Cha)' obj={this.props.deception} />
        <Score {...stuff} field='history' name='History (Int)' obj={this.props.history} />
        <Score {...stuff} field='insight' name='Insight (Wis)' obj={this.props.insight} />
        <Score {...stuff} field='intimidation' name='Intimidation (Cha)' obj={this.props.intimidation} />
        <Score {...stuff} field='investigation' name='Investigation (Int)' obj={this.props.investigation} />
        <Score {...stuff} field='medicine' name='Medicine (Wis)' obj={this.props.medicine} />
        <Score {...stuff} field='nature' name='Nature (Int)' obj={this.props.nature} />
        <Score {...stuff} field='perception' name='Perception (Wis)' obj={this.props.perception} />
        <Score {...stuff} field='performance' name='Performance (Cha)' obj={this.props.performance} />
        <Score {...stuff} field='persuation' name='Persuasion (Cha)' obj={this.props.persuation} />
        <Score {...stuff} field='religion' name='Religion (Int)' obj={this.props.religion} />
        <Score {...stuff} field='sleightOfHand' name='Sleight of Hand (Dex)' obj={this.props.sleightOfHand} />
        <Score {...stuff} field='stealth' name='Stealth (Dex)' obj={this.props.stealth} />
        <Score {...stuff} field='survival' name='Survival (Wis)' obj={this.props.survival} />
        Skills
      </div>
    )
  }
}

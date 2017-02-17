import React, {Component, PropTypes} from 'react'
import Score from './Score'
import {getModifier} from '../../../utilities/scoreutilities'

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
    abi: PropTypes.object,
  }

  render() {
    let {abi, change, pro} = this.props;
    let stuff = {change, pro}

    return (
      <div id='skillscores'>
        <Score {...stuff} field='acrobatics' name='Acrobatics (Dex)' obj={this.props.acrobatics} mod={getModifier(abi, 'dex')}/>
        <Score {...stuff} field='animalHandling' name='Animal Handling (Wis)' obj={this.props.animalHandling} mod={getModifier(abi, 'wis')}/>
        <Score {...stuff} field='arcana' name='Arcana (Int)' obj={this.props.arcana} mod={getModifier(abi, 'int')}/>
        <Score {...stuff} field='athletics' name='Athletics (Str)' obj={this.props.athletics} mod={getModifier(abi, 'str')}/>
        <Score {...stuff} field='deception' name='Deception (Cha)' obj={this.props.deception} mod={getModifier(abi, 'cha')}/>
        <Score {...stuff} field='history' name='History (Int)' obj={this.props.history} mod={getModifier(abi, 'int')}/>
        <Score {...stuff} field='insight' name='Insight (Wis)' obj={this.props.insight} mod={getModifier(abi, 'wis')}/>
        <Score {...stuff} field='intimidation' name='Intimidation (Cha)' obj={this.props.intimidation} mod={getModifier(abi, 'cha')}/>
        <Score {...stuff} field='investigation' name='Investigation (Int)' obj={this.props.investigation} mod={getModifier(abi, 'int')}/>
        <Score {...stuff} field='medicine' name='Medicine (Wis)' obj={this.props.medicine} mod={getModifier(abi, 'wis')}/>
        <Score {...stuff} field='nature' name='Nature (Int)' obj={this.props.nature} mod={getModifier(abi, 'int')}/>
        <Score {...stuff} field='perception' name='Perception (Wis)' obj={this.props.perception} mod={getModifier(abi, 'wis')}/>
        <Score {...stuff} field='performance' name='Performance (Cha)' obj={this.props.performance} mod={getModifier(abi, 'cha')}/>
        <Score {...stuff} field='persuation' name='Persuasion (Cha)' obj={this.props.persuation} mod={getModifier(abi, 'cha')}/>
        <Score {...stuff} field='religion' name='Religion (Int)' obj={this.props.religion} mod={getModifier(abi, 'int')}/>
        <Score {...stuff} field='sleightOfHand' name='Sleight of Hand (Dex)' obj={this.props.sleightOfHand} mod={getModifier(abi, 'dex')}/>
        <Score {...stuff} field='stealth' name='Stealth (Dex)' obj={this.props.stealth} mod={getModifier(abi, 'dex')}/>
        <Score {...stuff} field='survival' name='Survival (Wis)' obj={this.props.survival} mod={getModifier(abi, 'wis')}/>
        <span className='bold'>Skills</span>
      </div>
    )
  }
}

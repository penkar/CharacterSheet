import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {change, changeScore, magicChange} from '../actions'

import {Abilities, Skills, } from '../components/dnd'
import {AttacksAndSpellcasting, Health,} from '../components/dnd/attacks'
import {PassiveWisdom,} from '../components/dnd/skill'
import {Equiptment, Allies, Treasure, AddlFeaturesAndTraits, CharacterBackstory, CharacterApperance, Bonds, Flaws, Ideals, PersonalityTraits, ProficienciesAndLanguages, FeaturesAndTraits,} from '../components/dnd/textfields'
import {magicComponent} from '../components/dnd/magic'

const mapStateToProps = (state)=>{
  return ({
    characterNameReducer: state.characterNameReducer,
    abilities: state.abilityReducer,
    skills: state.skillsReducer,
    textfields: state.characterBioReducer,
    attacks: state.attackDefenseReducer,
    magic: state.magicReducer,
  });
}

const mapDispatchToActions = (dispatch) => {
  return {
    dispatch,
    change: bindActionCreators(change, dispatch),
    changeScore: bindActionCreators(changeScore, dispatch),
    changeMagic: bindActionCreators(magicChange, dispatch),
  }
}

class Sheet extends Component {
  static PropTypes = {

  }

  render() {
    let {characterNameReducer, abilities, skills, textfields, attacks, change, changeScore, magic, changeMagic,} = this.props;
    let atcks = {att: textfields.attacksAndSpellcasting, att1: attacks.attack1, att2: attacks.attack2, att3: attacks.attack3}
    return (
      <div style={{flexDirection:'column'}}>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1-3 pure-u-lg-2-24'>
            <Abilities {...abilities} change={changeScore}/>
          </div>

          <div className='pure-u-1-3 pure-u-lg-4-24'>
            <Skills {...skills} change={changeScore}/>
          </div>

          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1 pure-u-lg-6-24'>
            <Health {...attacks} change={change}/>
            <hr/>
            <AttacksAndSpellcasting {...atcks} change={change}/>
            <hr/>
            <PassiveWisdom passiveWisdom={skills.passiveWisdom} change={changeScore}/>
          </div>

          {magicComponent(magic, changeMagic)}
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

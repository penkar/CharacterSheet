import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as constants from '../constants'
import {change, changeScore, magicChange} from '../actions'


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

          <div className='pure-u-1 pure-u-lg-22-24'>
            {PersonalityTraits({text:textfields.personalityTraits, field:'personalityTraits', change})}
            <hr/>
            {Ideals({text:textfields.ideals, field:'ideals', change})}
            <hr/>
            {Bonds({text:textfields.bonds, field:'bonds', change})}
            <hr/>
            {Flaws({text:textfields.flaws, field:'flaws', change})}
            <hr/>
            {FeaturesAndTraits({text:textfields.featuresAndTraits, field:'featuresAndTraits', change})}
            <hr/>
            {ProficienciesAndLanguages({text: textfields.otherProficienciesAndLanguages, field:'otherProficienciesAndLanguages', change})}
            <hr/>
            {CharacterApperance({text: textfields.characterApperance, field:'characterApperance', change})}
            <hr/>
            {Treasure({text: textfields.treasure, field:'treasure', change})}
            <hr/>
            {CharacterBackstory({text: textfields.characterBackstory, field:'characterBackstory', change})}
            <hr/>
            {Allies({text: textfields.allies, field:'allies', change})}
            <hr/>
            {AddlFeaturesAndTraits({text: textfields.additionalFeaturesAndTraits, field:'additionalFeaturesAndTraits', change})}
          </div>

        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

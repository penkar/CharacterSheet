import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as constants from '../constants'
import {change, changeScore, magicChange} from '../actions'

import {Header1, Header2, Header3, Abilities, Skills, } from '../components/dnd'
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
        <hr/>
        {Header1(characterNameReducer, change)}
        <hr/>

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
            <Equiptment currency={textfields.gold} field='equiptment' text={textfields.equiptment} change={change}/>
          </div>

          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1 pure-u-lg-6-24'>
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
          </div>

          <div className='pure-u-1 pure-u-lg-3-24' />
          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1 pure-u-lg-6-24'>
            <PassiveWisdom passiveWisdom={skills.passiveWisdom} change={changeScore}/>
            <hr/>
            {ProficienciesAndLanguages({text: textfields.otherProficienciesAndLanguages, field:'otherProficienciesAndLanguages', change})}
          </div>
        </div>

        <hr/>
        {Header2(characterNameReducer,change)}
        <hr/>

        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />
          {CharacterApperance({text: textfields.characterApperance, field:'characterApperance', change})}
          {Treasure({text: textfields.treasure, field:'treasure', change})}
        </div>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />
          {CharacterBackstory({text: textfields.characterBackstory, field:'characterBackstory', change})}
          {Allies({text: textfields.allies, field:'allies', change})}
        </div>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />
          <div className='pure-u-1 pure-u-lg-1-5'></div>
          {AddlFeaturesAndTraits({text: textfields.additionalFeaturesAndTraits, field:'additionalFeaturesAndTraits', change})}
        </div>

        <hr/>
        <Header3 change={changeMagic} magic={magic}/>
        <hr/>

        {magicComponent(magic, changeMagic)}
      </div>
    )
  }
}

// <div style={{flexDirection:'row', display:'flex', justifyContent: 'space-between'}}>
//
//   <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
//     {PersonalityTraits({text:textfields.personalityTraits, field:'personalityTraits', change})}
//     {Ideals({text:textfields.ideals, field:'ideals', change})}
//     {Bonds({text:textfields.bonds, field:'bonds', change})}
//     {Flaws({text:textfields.flaws, field:'flaws', change})}
//     {FeaturesAndTraits({text:textfields.featuresAndTraits, field:'featuresAndTraits', change})}
//   </div>
//
// </div>
//
// <br/>


export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

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
      <div id='sheet'>
        <div style={{flexDirection:'column'}}>
          {Header1(characterNameReducer, change)}
          {Header2(characterNameReducer,change)}
          <Header3 change={changeMagic} magic={magic}/>
        </div>
      </div>
    )
  }
}
// <br/>
//
// <div style={{flexDirection:'row', display:'flex', justifyContent: 'space-between'}}>
//
//   <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
//     <div style={{flexDirection:'row', display:'flex'}}>
//       <Abilities {...abilities} change={changeScore}/>
//       <Skills {...skills} change={changeScore}/>
//     </div>
//     <PassiveWisdom passiveWisdom={skills.passiveWisdom} change={changeScore}/>
//     {ProficienciesAndLanguages({text: textfields.otherProficienciesAndLanguages, field:'otherProficienciesAndLanguages', change})}
//   </div>
//
//   <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
//     <Health {...attacks} change={change}/>
//     <AttacksAndSpellcasting {...atcks} change={change}/>
//     <Equiptment currency={textfields.gold} field='equiptment' text={textfields.equiptment} change={change}/>
//   </div>
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
//
//
// <br/>
//
// <div style={{flexDirection:'row', display:'flex', justifyContent: 'space-around'}}>
//   <div style={{flexDirection:'column'}}>
//     {CharacterApperance({text: textfields.characterApperance, field:'characterApperance', change})}
//     {CharacterBackstory({text: textfields.characterBackstory, field:'characterBackstory', change})}
//   </div>
//
//   <div style={{flexDirection:'column'}}>
//     {Allies({text: textfields.allies, field:'allies', change})}
//     {Treasure({text: textfields.treasure, field:'treasure', change})}
//     {AddlFeaturesAndTraits({text: textfields.additionalFeaturesAndTraits, field:'additionalFeaturesAndTraits', change})}
//   </div>
// </div>
//
// <br/>
//
//
// {magicComponent(magic, changeMagic)}


export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

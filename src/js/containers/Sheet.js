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
          <Header1 {...characterNameReducer} change={change}/>

          <br/>

          <div style={{flexDirection:'row', display:'flex', justifyContent: 'space-between'}}>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
              <div style={{flexDirection:'row', display:'flex'}}>
                <Abilities {...abilities} change={changeScore}/>
                <Skills {...skills} change={changeScore}/>
              </div>
              <PassiveWisdom passiveWisdom={skills.passiveWisdom} change={changeScore}/>
              <ProficienciesAndLanguages text={textfields.otherProficienciesAndLanguages} field='otherProficienciesAndLanguages' change={change}/>
            </div>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
              <Health {...attacks} change={change}/>
              <AttacksAndSpellcasting {...atcks} change={change}/>
              <Equiptment currency={textfields.gold} field='equiptment' text={textfields.equiptment} change={change}/>
            </div>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
              <PersonalityTraits text={textfields.personalityTraits} field='personalityTraits' change={change}/>
              <Ideals text={textfields.ideals} field='ideals' change={change}/>
              <Bonds text={textfields.bonds} field='bonds' change={change}/>
              <Flaws text={textfields.flaws} field='flaws' change={change}/>
              <FeaturesAndTraits text={textfields.featuresAndTraits} field='featuresAndTraits' change={change}/>
            </div>

          </div>

          <br/>

          <Header2 {...characterNameReducer} change={change}/>

          <br/>

          <div style={{flexDirection:'row', display:'flex', justifyContent: 'space-around'}}>
            <div style={{flexDirection:'column', width:'30%'}}>
              <CharacterApperance text={textfields.characterApperance} field='characterApperance' change={change}/>
              <CharacterBackstory text={textfields.characterBackstory} field='characterBackstory' change={change}/>
            </div>

            <div style={{flexDirection:'column', width:'65%'}}>
              <Allies text={textfields.allies} field='allies' change={change}/>
              <Treasure text={textfields.treasure} field='treasure' change={change}/>
              <AddlFeaturesAndTraits text={textfields.additionalFeaturesAndTraits} field='additionalFeaturesAndTraits' change={change}/>
            </div>
          </div>

          <br/>

          <Header3 change={change} />

          {magicComponent(magic, magicChange)}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

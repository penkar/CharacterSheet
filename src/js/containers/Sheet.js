import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as constants from '../constants'
import {change} from '../actions'

import {Header1, Header2, Abilities, Skills, } from '../components/dnd'
import {AttacksAndSpellcasting, Health,} from '../components/dnd/attacks'
import {PassiveWisdom,} from '../components/dnd/skill'
import {Equiptment, Allies, Treasure, AddlFeaturesAndTraits, CharacterBackstory, CharacterApperance, Bonds, Flaws, Ideals, PersonalityTraits, ProficienciesAndLanguages, FeaturesAndTraits,} from '../components/dnd/textfields'

const mapStateToProps = (state)=>{
  return ({
    characterNameReducer: state.characterNameReducer,
    abilities: state.abilityReducer,
    skills: state.skillsReducer,
    textfields: state.characterBioReducer,
    attacks: state.attackDefenseReducer,
    state,
  });
}

const mapDispatchToActions = (dispatch) => {
  return {
    dispatch,
    change: bindActionCreators(change, dispatch)
  }
}

class Sheet extends Component {
  static PropTypes = {

  }

  render() {
    let {characterNameReducer, abilities, skills, textfields, attacks, change,} = this.props;
    let atcks = {att: attacks.attacksAndSpells, att1: attacks.attack1, att2: attacks.attack1, att3: attacks.attack3}
    return (
      <div id='sheet'>
        <div style={{flexDirection:'column'}}>
          <Header1 {...characterNameReducer} change={change}/>

          <br/>

          <div style={{flexDirection:'row', display:'flex', justifyContent: 'space-between'}}>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
              <div style={{flexDirection:'row', display:'flex'}}>
                <Abilities {...abilities}/>
                <Skills {...skills}/>
              </div>
              <PassiveWisdom passiveWisdom={skills.passiveWisdom}/>
              <ProficienciesAndLanguages text={textfields.otherProficienciesAndLanguages} field='otherProficienciesAndLanguages'/>
            </div>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
              <Health {...attacks}/>
              <AttacksAndSpellcasting {...atcks}/>
              <Equiptment currency={textfields.gold} field='equiptment' text={textfields.equiptment} />
            </div>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
              <PersonalityTraits text={textfields.personalityTraits} field='personalityTraits'/>
              <Ideals text={textfields.personalityTraits} field='personalityTraits'/>
              <Bonds text={textfields.bonds} field='bonds'/>
              <Flaws text={textfields.flaws} field='flaws'/>
              <FeaturesAndTraits text={textfields.featuresAndTraits} field='featuresAndTraits'/>
            </div>

          </div>

          <br/>

          <Header2 {...characterNameReducer} change={change}/>

          <br/>

          <div style={{flexDirection:'row', display:'flex', justifyContent: 'space-around'}}>
            <div style={{flexDirection:'column', width:'30%'}}>
              <CharacterApperance text={textfields.characterApperance} field='characterApperance'/>
              <CharacterBackstory text={textfields.characterBacksotry} field='characterBacksotry'/>
            </div>

            <div style={{flexDirection:'column', width:'65%'}}>
              <Allies text={textfields.allies} field='allies'/>
              <Treasure text={textfields.treasure} field='treasure'/>
              <AddlFeaturesAndTraits text={textfields.additionalFeaturesAndTraits} field='additionalFeaturesAndTraits'/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

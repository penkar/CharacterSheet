import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import * as constants from '../constants'

import {Header1, Header2, Abilities, Skills, } from '../components/dnd'
import {PassiveWisdom,} from '../components/dnd/skill'
import {CharacterBackstory, CharacterApperance, Bonds, Flaws, Ideals, PersonalityTraits, ProficienciesAndLanguages, FeaturesAndTraits,} from '../components/dnd/textfields'

const mapStateToProps = (state)=>{
  return ({
    characterNameReducer: state.characterNameReducer,
    abilities: state.abilityReducer,
    skills: state.skillsReducer,
    textfields: state.characterBioReducer,
    state,
  });
}

class Sheet extends Component {
  static PropTypes = {

  }

  componentDidMount() {
    this.props.dispatch({type:'WRITING'})
  }

  render() {
    let {characterNameReducer, abilities, skills, textfields,} = this.props;
    return (
      <div id='sheet'>
        <div style={{flexDirection:'column'}}>
          <Header1 {...characterNameReducer}/>

          <div style={{flexDirection:'row', display:'flex'}}>

            <div style={{flexDirection:'column'}}>
              <div style={{flexDirection:'row', display:'flex'}}>
                <Abilities {...abilities}/>
                <Skills {...skills}/>
              </div>
              <PassiveWisdom passiveWisdom={skills.passiveWisdom}/>
              <ProficienciesAndLanguages text={textfields.otherProficienciesAndLanguages} field='otherProficienciesAndLanguages'/>
            </div>

            <div style={{flexDirection:'column'}}>
            </div>

            <div style={{flexDirection:'column'}}>
              <PersonalityTraits text={textfields.personalityTraits} field='personalityTraits'/>
              <Ideals text={textfields.personalityTraits} field='personalityTraits'/>
              <Bonds text={textfields.bonds} field='bonds'/>
              <Flaws text={textfields.flaws} field='flaws'/>
              <FeaturesAndTraits text={textfields.featuresAndTraits} field='featuresAndTraits'/>
            </div>

          </div>

          <Header2 {...characterNameReducer}/>

          <div style={{flexDirection:'row', display:'flex'}}>
            <div style={{flexDirection:'column'}}>
              <CharacterApperance text={textfields.characterApperance} field='characterApperance'/>
              <CharacterBackstory text={textfields.characterBacksotry} field='characterBacksotry'/>
            </div>

            <div style={{flexDirection:'column'}}>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Sheet)

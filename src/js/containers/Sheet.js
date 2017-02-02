import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import * as constants from '../constants'

import {Header1, Header2, Abilities, Skills, } from '../components/dnd/index'
import {PassiveWisdom,} from '../components/dnd/skill'

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
    let {characterNameReducer, abilities, skills,} = this.props;
    return (
      <div id='sheet'>
        <div style={{flexDirection:'column'}}>
          <Header1 {...characterNameReducer}/>

          <div style={{flexDirection:'column'}}>
            <div style={{flexDirection:'row', display:'flex'}}>
              <Abilities {...abilities}/>
              <Skills {...skills}/>
            </div>
            <PassiveWisdom passiveWisdom={skills.passiveWisdom}/>
          </div>

          <Header2 {...characterNameReducer}/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Sheet)

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions'

import {Abilities, Skills, } from '../components/dnd'
import {AttacksAndSpellcasting, Health,} from '../components/dnd/attacks'
import {PassiveWisdom,} from '../components/dnd/skill'
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
    change: bindActionCreators(actions.change, dispatch),
    changeScore: bindActionCreators(actions.changeScore, dispatch),
    changeMagic: bindActionCreators(actions.magicChange, dispatch),
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
            { Abilities(abilities, changeScore) }
          </div>

          <div className='pure-u-1-3 pure-u-lg-4-24'>
            <Skills {...skills} change={changeScore}/>
          </div>

          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1 pure-u-lg-15-24'>
            {Health(attacks, change)}
            <hr/>
            {AttacksAndSpellcasting(atcks, change)}
            <hr/>
            {PassiveWisdom(skills.passiveWisdom, changeScore)}
          </div>
          <div className='pure-u-1'>
            {magicComponent(magic, changeMagic)}
          </div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions'
import * as dnd from '../components'

const mapStateToProps = (state)=> ({
  characterNameReducer: state.characterNameReducer,
  abi: state.abilityReducer,
  abilities: state.abilityReducer,
  skills: state.skillsReducer,
  textfields: state.characterBioReducer,
  attacks: state.attackDefenseReducer,
  magic: state.magicReducer,
})
const mapDispatchToActions = (dispatch) => ({
  dispatch,
  change: bindActionCreators(actions.change, dispatch),
  changeScore: bindActionCreators(actions.changeScore, dispatch),
  changeMagic: bindActionCreators(actions.magicChange, dispatch),
})

class Sheet extends React.Component {
  render() {
    let {characterNameReducer, abilities, skills, textfields, attacks, change, changeScore, magic, changeMagic,} = this.props;
    let atcks = {att: textfields.attacksAndSpellcasting, att1: attacks.attack1, att2: attacks.attack2, att3: attacks.attack3}
    return (
      <div style={{flexDirection:'column'}}>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1-3 pure-u-lg-2-24'>
            { dnd.Abilities(abilities, changeScore) }
          </div>

          <div className='pure-u-1-3 pure-u-lg-4-24'>
            { dnd.Skills({...skills}, changeScore, abilities) }
          </div>

          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1 pure-u-lg-15-24'>
            { dnd.Health(attacks, change) }
            <hr/>
            { dnd.AttacksAndSpellcasting(atcks, change) }
            <hr/>
            { dnd.PassiveWisdom(skills.passiveWisdom, changeScore) }
          </div>
          <div className='pure-u-1'>
            { dnd.magicComponent(magic, changeMagic) }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

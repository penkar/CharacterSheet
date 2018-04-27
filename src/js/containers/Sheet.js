import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as constants from '../constants'
import * as actions from '../actions'

import * as dnd from '../components/dnd';
import * as tf from '../components/dnd/textfields';

const mapStateToProps = (state) => ({
  abilities:state.abilityReducer,
  attacks:state.attackDefenseReducer,
  characterNameReducer:state.characterNameReducer,
  feats:state.featsReducer,
  magic:state.magicReducer,
  skills:state.skillsReducer,
  textfields:state.characterBioReducer,
});

const mapDispatchToActions = (dispatch) => ({
  dispatch,
  change:bindActionCreators(actions.change, dispatch),
  changeScore: bindActionCreators(actions.changeScore, dispatch),
  changeMagic: bindActionCreators(actions.magicChange, dispatch),
});

class Sheet extends React.Component {
  render() {
    let {feats, characterNameReducer, abilities, skills, textfields, attacks, change, changeScore, magic, changeMagic,} = this.props;
    let atcks = {att: textfields.attacksAndSpellcasting, att1: attacks.attack1, att2: attacks.attack2, att3: attacks.attack3};
    return (
      <div style={{flexDirection:'column'}}>
        { dnd.Header1(characterNameReducer, change) }
        <hr/>

        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1 pure-u-lg-6-24'>
            <div className='pure-u-1-3 pure-u-lg-8-24'>
              { dnd.Abilities(abilities, changeScore) }
            </div>

            <div className='pure-u-2-3 pure-u-lg-16-24'>
              {dnd.Skills({...skills}, changeScore, abilities)}
            </div>

            <div className='pure-u-1 pure-u-lg-24-24'>
              { dnd.PassiveWisdom(skills.passiveWisdom, changeScore) }
              <hr/>
              { tf.ProficienciesAndLanguages({text: textfields.otherProficienciesAndLanguages, field:'otherProficienciesAndLanguages', change}) }
            </div>
          </div>


          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1 pure-u-lg-6-24'>
            { dnd.Health(attacks, change) }
            <hr/>
            { dnd.AttacksAndSpellcasting(atcks, change) }
            <hr/>
            { tf.Equiptment({currency:textfields.gold, field:'equiptment', text:textfields.equiptment, change}) }
          </div>

          <div className='pure-u-1 pure-u-lg-1-24' />

          <div className='pure-u-1 pure-u-lg-6-24'>
            { tf.PersonalityTraits({text:textfields.personalityTraits, field:'personalityTraits', change}) }
            <hr/>
            { tf.Ideals({text:textfields.ideals, field:'ideals', change}) }
            <hr/>
            { tf.Bonds({text:textfields.bonds, field:'bonds', change}) }
            <hr/>
            { tf.Flaws({text:textfields.flaws, field:'flaws', change}) }
            <hr/>
            { tf.FeaturesAndTraits({text:textfields.featuresAndTraits, field:'featuresAndTraits', change}) }
            <hr/>
          </div>

          <div className='pure-u-1 pure-u-lg-3-24' />
          <div className='pure-u-1 pure-u-lg-1-24' />

        </div>

        <hr/>
        { dnd.Header2(characterNameReducer,change) }
        <hr/>

        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />
          { tf.CharacterApperance({text: textfields.characterApperance, field:'characterApperance', change}) }
          { tf.Treasure({text: textfields.treasure, field:'treasure', change}) }
        </div>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />
          { tf.CharacterBackstory({text: textfields.characterBackstory, field:'characterBackstory', change}) }
          { tf.Allies({text: textfields.allies, field:'allies', change}) }
        </div>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />
          <div className='pure-u-1 pure-u-lg-1-5' style={{marginLeft: '40px'}} />
          { tf.AddlFeaturesAndTraits({text: textfields.additionalFeaturesAndTraits, field:'additionalFeaturesAndTraits', change}) }
        </div>

        <hr/>
        { dnd.Header3({change:changeMagic, magic}) }
        <hr/>

        { dnd.magicComponent(magic, changeMagic) }

        <hr/>
        { dnd.Feats({feats, change:changeScore, open:false}) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

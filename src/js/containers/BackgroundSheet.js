import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'
import * as tf from '../components/dnd/textfields'

const mapStateToProps = (state) => ({textfields: state.characterBioReducer});
const mapDispatchToActions = (dispatch) => ({change: bindActionCreators(actions.change, dispatch),})

class Sheet extends React.Component {
  render() {
    let { textfields, change } = this.props;
    return (
      <div style={{flexDirection:'column'}}>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />
          <div className='pure-u-1 pure-u-lg-22-24'>
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
            { tf.ProficienciesAndLanguages({text: textfields.otherProficienciesAndLanguages, field:'otherProficienciesAndLanguages', change}) }
            <hr/>
            { tf.CharacterApperance({text: textfields.characterApperance, field:'characterApperance', change}) }
            <hr/>
            { tf.Treasure({text: textfields.treasure, field:'treasure', change}) }
            <hr/>
            { tf.CharacterBackstory({text: textfields.characterBackstory, field:'characterBackstory', change}) }
            <hr/>
            { tf.Allies({text: textfields.allies, field:'allies', change}) }
            <hr/>
            { tf.AddlFeaturesAndTraits({text: textfields.additionalFeaturesAndTraits, field:'additionalFeaturesAndTraits', change}) }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet);

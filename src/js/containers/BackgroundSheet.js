import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {change} from '../actions'
import * as textfields from '../components/dnd/textfields'

const mapStateToProps = (state)=>{
  return ({
    textfields: state.characterBioReducer,
  });
}

const mapDispatchToActions = (dispatch) => {
  return {
    change: bindActionCreators(change, dispatch),
  }
}

class Sheet extends Component {
  render() {
    let { textfields } = this.props;
    return (
      <div style={{flexDirection:'column'}}>
        <div className='pure-g'>
          <div className='pure-u-1 pure-u-lg-1-24' />
          <div className='pure-u-1 pure-u-lg-22-24'>
            { textfields.PersonalityTraits({text:textfields.personalityTraits, field:'personalityTraits', change}) }
            <hr/>
            { textfields.Ideals({text:textfields.ideals, field:'ideals', change}) }
            <hr/>
            { textfields.Bonds({text:textfields.bonds, field:'bonds', change}) }
            <hr/>
            { textfields.Flaws({text:textfields.flaws, field:'flaws', change}) }
            <hr/>
            { textfields.FeaturesAndTraits({text:textfields.featuresAndTraits, field:'featuresAndTraits', change}) }
            <hr/>
            { textfields.ProficienciesAndLanguages({text: textfields.otherProficienciesAndLanguages, field:'otherProficienciesAndLanguages', change}) }
            <hr/>
            { textfields.CharacterApperance({text: textfields.characterApperance, field:'characterApperance', change}) }
            <hr/>
            { textfields.Treasure({text: textfields.treasure, field:'treasure', change}) }
            <hr/>
            { textfields.CharacterBackstory({text: textfields.characterBackstory, field:'characterBackstory', change}) }
            <hr/>
            { textfields.Allies({text: textfields.allies, field:'allies', change}) }
            <hr/>
            { textfields.AddlFeaturesAndTraits({text: textfields.additionalFeaturesAndTraits, field:'additionalFeaturesAndTraits', change}) }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

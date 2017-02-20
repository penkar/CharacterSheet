import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {change} from '../actions'
import {Equiptment, Allies, Treasure, AddlFeaturesAndTraits, CharacterBackstory, CharacterApperance, Bonds, Flaws, Ideals, PersonalityTraits, ProficienciesAndLanguages, FeaturesAndTraits,} from '../components/dnd/textfields'

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
            {PersonalityTraits({text:textfields.personalityTraits, field:'personalityTraits', change})}
            <hr/>
            {Ideals({text:textfields.ideals, field:'ideals', change})}
            <hr/>
            {Bonds({text:textfields.bonds, field:'bonds', change})}
            <hr/>
            {Flaws({text:textfields.flaws, field:'flaws', change})}
            <hr/>
            {FeaturesAndTraits({text:textfields.featuresAndTraits, field:'featuresAndTraits', change})}
            <hr/>
            {ProficienciesAndLanguages({text: textfields.otherProficienciesAndLanguages, field:'otherProficienciesAndLanguages', change})}
            <hr/>
            {CharacterApperance({text: textfields.characterApperance, field:'characterApperance', change})}
            <hr/>
            {Treasure({text: textfields.treasure, field:'treasure', change})}
            <hr/>
            {CharacterBackstory({text: textfields.characterBackstory, field:'characterBackstory', change})}
            <hr/>
            {Allies({text: textfields.allies, field:'allies', change})}
            <hr/>
            {AddlFeaturesAndTraits({text: textfields.additionalFeaturesAndTraits, field:'additionalFeaturesAndTraits', change})}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Sheet)

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import * as constants from '../constants'

import {Header1, Header2, Abilities} from '../components/dnd/index'

const mapStateToProps = (state)=>{
  return ({
    characterNameReducer: state.characterNameReducer,
    abilities: state.abilityReducer,
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
    let {characterNameReducer, abilities} = this.props;
    return (
      <div id='sheet'>
        <Header1 {...characterNameReducer}/>
        <Abilities {...abilities}/>
        <Header2 {...characterNameReducer}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Sheet)

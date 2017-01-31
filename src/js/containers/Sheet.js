import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import * as constants from '../constants'

import {Header} from '../components/dnd/index'

const mapStateToProps = (state)=>{
  return ({
    characterNameReducer: state.characterNameReducer,
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
    let {characterNameReducer} = this.props;
    return (
      <div id='sheet'>
        <Header {...characterNameReducer}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Sheet)

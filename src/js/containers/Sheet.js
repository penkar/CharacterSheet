import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import * as constants from '../constants'

const mapStateToProps = (state)=>{
  return ({
    state
  });
}

class Sheet extends Component {
  static PropTypes = {

  }

  componentDidMount() {
    this.props.dispatch({type:'WRITING'})
  }

  render() {
    return (
      <div id='sheet'>
        Sheet
      </div>
    )
  }
}

export default connect(mapStateToProps)(Sheet)

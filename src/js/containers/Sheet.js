import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
  return ({
    state
  });
}

class Sheet extends Component {
  static PropTypes = {

  }
  render() {
    console.log(this.props);
    return (
      <div id='sheet'>
        Sheet
      </div>
    )
  }
}

export default connect(mapStateToProps)(Sheet)

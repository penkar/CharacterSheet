import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import Sheet from './Sheet.js';
import Loading from './Loading';

import Error from '../components/Error';
import Root from '../components/Root'
import Modal from '../components/Modal'
import {settingsChange} from '../actions'

require('../../style/Base.scss')

const mapDispatchToProps = (dispatch)=>{
  return ({
    dispatch,
  })
}

const mapStateToProps = (state)=>{
  return ({
    loading: state.settingsReducer.loading,
  });
}

class App extends Component {
  _content() {
    // <Root />
    // <Sheet />
    return null;
  }

  render() {
    return (
      <div>
        <Sheet />
        <Modal>

        </Modal>
        {Loading(this.props.loading)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

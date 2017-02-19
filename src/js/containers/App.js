import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Sheet from './Sheet.js';
import Loading from './Loading';

import Error from '../components/Error';
import Root from '../components/Root'
import Modal from '../components/Modal'
import {settingsChange, modalChange, settingsView,} from '../actions'
import {MenuContainer, Menu, } from '../components/menu'
import {fetchUser, } from '../utilities/apiUtilities'
// import * as firebase from 'firebase'

require('../../style/Base.scss')

const mapDispatchToProps = (dispatch)=>{
  // window.dispatch = dispatch;
  return ({
    viewSwitch: bindActionCreators(settingsView, dispatch),
    modalSetting: bindActionCreators(modalChange, dispatch),
    getUser: bindActionCreators(fetchUser, dispatch),
    dispatch,
  })
}

const mapStateToProps = (state) => {
  // window.state = state;
  return ({
    view: state.settingsReducer.view,
    error: state.settingsReducer.error,
    modal: state.settingsReducer.modal,
    type: state.settingsReducer.modalType,
    loading: state.settingsReducer.loading,
  });
}

class App extends Component {
  componentDidMount() {
    let {getUser, dispatch} = this.props;
    let {hash} = window.location;
    hash = hash.substr(1, hash.length)
    getUser(hash, dispatch);
    // window.firebase = firebase
  }

  _content(type) {
    switch (type) {
      case 'find':
      case 'character':
        return <Root />
      case 'error':
        return Error(this.props.error);
      default:
        return null;
    }
  }

  _mainDisplay(view) {
    switch (view) {
      case 'all':
      default:
        return <Sheet />;
    }
  }

  render() {
    let {viewSwitch, modalSetting, modal, type, } = this.props;
    return (
      <div>
        { ::this._mainDisplay() }

        <MenuContainer modalCB={modalSetting} viewCB={viewSwitch}/>

        <Modal modalCB={modalSetting} open={modal}>
          { type && ::this._content(type) }
        </Modal>

        { Loading(this.props.loading) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

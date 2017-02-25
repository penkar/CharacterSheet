import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

import Sheet from './Sheet';
import AttackSheet from './AttackSheet';
import BackgroundSheet from './BackgroundSheet';

import Loading from './Loading';

import Error from '../components/Error';
import Root from '../components/Root'
import Modal from '../components/Modal'
import {settingsChange, modalChange, settingsView, userSettingAction, userSignoutAction,} from '../actions'
import {MenuContainer, Menu, } from '../components/menu'
import {fetchUser, } from '../utilities/apiUtilities'

require('../../style/Base.scss')

const mapDispatchToProps = (dispatch)=>{
  return ({
    viewSwitch: bindActionCreators(settingsView, dispatch),
    modalSetting: bindActionCreators(modalChange, dispatch),
    getUser: bindActionCreators(fetchUser, dispatch),
    userSetting: bindActionCreators(userSettingAction, dispatch),
    signout: bindActionCreators(userSignoutAction, dispatch),
    dispatch,
  })
}

const mapStateToProps = (state) => {
  return ({
    view: state.settingsReducer.view,
    error: state.settingsReducer.error,
    modal: state.settingsReducer.modal,
    type: state.settingsReducer.modalType,
    loading: state.settingsReducer.loading,
    user: state.userReducer,
  });
}

class App extends Component {
  componentDidMount() {
    let {getUser, dispatch, userSetting} = this.props;
    let {hash} = window.location;
    hash = hash.substr(1, hash.length)
    if(hash) return getUser(hash, dispatch);
  }

  _content(type) {
    switch (type) {
      case 'root':
        return <Root />
      case 'error':
        return Error(this.props.error);
      default:
        return null;
    }
  }

  _mainDisplay(view) {
    switch (view) {
      case 'attack':
        return <AttackSheet />
      case 'bkgd':
        return <BackgroundSheet />
      case 'all':
      default:
        return <Sheet />;
    }
  }

  render() {
    let {viewSwitch, modalSetting, modal, type, view, user,} = this.props;
    return (
      <div id='app'>
        <MenuContainer modalCB={modalSetting} viewCB={viewSwitch} user={user} signout={::this._signout}/>

        { ::this._mainDisplay(view) }

        <Modal modalCB={modalSetting} open={modal}>
          { type && ::this._content(type) }
        </Modal>

        { Loading(this.props.loading) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

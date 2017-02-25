import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

import Sheet from './Sheet';
import AttackSheet from './AttackSheet';
import BackgroundSheet from './BackgroundSheet';

import Loading from '../components/Loading';
import Update from '../components/Update'

import Error from '../components/Error';
import Root from '../components/Root'
import Modal from '../components/Modal'
import {settingsChange, modalChange, settingsView, } from '../actions'
import {MenuContainer, Menu, } from '../components/menu'
import {fetchUser, updateUser, } from '../utilities/apiUtilities'

require('../../style/Base.scss')

const mapDispatchToProps = (dispatch)=> ({
  viewSwitch: bindActionCreators(settingsView, dispatch),
  modalSetting: bindActionCreators(modalChange, dispatch),
  getUser: bindActionCreators(fetchUser, dispatch),
  postUser: bindActionCreators(updateUser, dispatch),
  dispatch,
});

const mapStateToProps = (state) => ({
  view: state.settingsReducer.view,
  error: state.settingsReducer.error,
  modal: state.settingsReducer.modal,
  type: state.settingsReducer.modalType,
  loading: state.settingsReducer.loading,
  pending: state.settingsReducer.pending,
});

class App extends Component {
  componentDidMount() {
    window.addEventListener('hashchange', ::this._hashChange)
    let {getUser, dispatch, userSetting} = this.props, hash = window.location.hash.substr(1, window.location.hash.length);
    if(hash) {
      ::this._hashGrab(hash);
    } else {
      this.props.modalSetting({setting:true, modalType:'root'});
   }
  }

  _hashGrab(hash) {
    return this.props.getUser(hash, this.props.dispatch);
  }

  _hashChange() {
    let hash = window.location.hash.substr(1, window.location.hash.length);
    if(hash) ::this._hashGrab(hash);
  }

  _content(type, modalSetting) {
    switch (type) {
      case 'root':
        return <Root createUser={this.props.postUser} dispatch={this.props.dispatch} modalSetting={modalSetting}/>
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
    let {viewSwitch, modalSetting, modal, type, view, user, pending, updateUser} = this.props;
    return (
      <div id='app'>
        <MenuContainer modalCB={modalSetting} viewCB={viewSwitch} user={user}/>

        { ::this._mainDisplay(view) }

        <Modal modalCB={modalSetting} open={modal}>
          { type && ::this._content(type, modalSetting) }
        </Modal>

        <Update />
        { Loading(this.props.loading) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

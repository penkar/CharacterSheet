import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

import Sheet from './Sheet';
import AttackSheet from './AttackSheet';
import BackgroundSheet from './BackgroundSheet';

import {MenuContainer, Menu, Update, Loading, Error, Root, Modal} from '../components';

import * as actions from '../actions'
import * as apiUtilities from '../utilities/apiUtilities'

require('../../style/Base.scss')

const mapDispatchToProps = (dispatch)=> ({
  changeMenu: bindActionCreators(actions.changeMenu, dispatch),
  settingsView: bindActionCreators(actions.settingsView, dispatch),
  modalChange: bindActionCreators(actions.modalChange, dispatch),
  fetchUser: bindActionCreators(apiUtilities.fetchUser, dispatch),
  createUser: bindActionCreators(apiUtilities.createUser, dispatch),
  dispatch,
});

const mapStateToProps = (state) => ({
  view: state.settingsReducer.view,
  error: state.settingsReducer.error,
  modal: state.settingsReducer.modal,
  type: state.settingsReducer.modalType,
  loading: state.settingsReducer.loading,
  menuOpen: state.settingsReducer.menuOpen,
});

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('hashchange', this._hashChange)
    let {fetchUser,} = this.props, hash = window.location.hash.substr(1, window.location.hash.length);
    if(hash) {
      this._hashGrab(hash);
    } else {
      this.props.modalChange({setting:true, modalType:'root'});
   }
  }

  _hashGrab = (hash) => {
    return this.props.fetchUser(hash, this.props.dispatch);
  }

  _hashChange = () => {
    let hash = window.location.hash.substr(1, window.location.hash.length);
    if(hash) this._hashGrab(hash);
  }

  _content = (type, modalChange) => {
    switch (type) {
      case 'root':
        return Root({createUser:this.props.createUser, dispatch:this.props.dispatch, modalChange})
      case 'error':
        return Error(this.props.error);
      default:
        return null;
    }
  }

  _mainDisplay = (view) => {
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
    let {settingsView, modalChange, modal, type, view, user, loading, menuOpen, changeMenu} = this.props;
    return (
      <div id='app'>
        <MenuContainer modalCB={modalChange} viewCB={settingsView} user={user} open={menuOpen} changeMenu={changeMenu}/>

        { this._mainDisplay(view) }

        <Modal modalCB={modalChange} open={modal}>
          { type && this._content(type, modalChange) }
        </Modal>
        <Update />

        { loading && Loading() }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

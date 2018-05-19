import React from 'react';
import cn from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import FeatsSheet from './FeatsSheet';
import SpellSheet from './SpellSheet';
import Sheet from './Sheet';
import AttackSheet from './AttackSheet';
import BackgroundSheet from './BackgroundSheet';

import { Update, Error, Modal, LandingPage } from '../components';
import Menu from 'react-icons/lib/md/menu';

import * as actions from '../actions'
import * as apiUtilities from '../utilities/apiUtilities'

require('../../style/Base.scss');

const mapDispatchToProps = (dispatch)=> ({
  changeMenu: bindActionCreators(actions.changeMenu, dispatch),
  changeSetting: bindActionCreators(actions.changeSetting, dispatch),
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
  filter: state.settingsReducer.filter,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hash: window.location.hash};
  }
  componentDidMount() {
    window.addEventListener('hashchange', this._hashChange);
    let { fetchUser } = this.props, hash = window.location.hash.substr(1, window.location.hash.length);
    if(hash) {
      this._hashGrab(hash);
    }
  }

  _hashGrab = (hash) => {
    return this.props.fetchUser(hash, this.props.dispatch);
  }

  _hashChange = () => {
    let hash = window.location.hash.substr(1, window.location.hash.length);
    this.setState({hash});
    if(hash) this._hashGrab(hash);
  }

  _content = (type, modalChange) => {
    switch (type) {
      case 'error':
        return Error(this.props.error);
      default:
        return null;
    }
  }

  _mainDisplay = (view) => {
    switch (view) {
      case 'magic':
        return SpellSheet({
          filter:this.props.filter,
          change:this.props.changeSetting,
        })
      case 'attack':
        return <AttackSheet />
      case 'bkgd':
        return <BackgroundSheet />
      case 'feat':
        return <FeatsSheet />
      case 'all':
      default:
        return <Sheet />;
    }
  }

  render() {
    let {settingsView, modalChange, modal, type, view, user, loading, menuOpen, changeMenu} = this.props;
    return (
      <div id='app'>
        <div id='menu-container'>
          <Menu id='menu' onClick={changeMenu}/>
          <div id='menu-list' className={cn({open:menuOpen})}>
            <a onClick={()=>(settingsView('all'))}>See All</a>
            <a onClick={()=>(settingsView('attack'))}>See Attack</a>
            <a onClick={()=>(settingsView('bkgd'))}>See Background</a>
            <a onClick={()=>(settingsView('feat'))}>Add a Feat</a>
            <a onClick={()=>(settingsView('magic'))}>See all Magic Spells</a>
            <a onClick={()=>(modalChange({setting:true, modalType:'root'}))}>Find a Character</a>
            <a onClick={()=>(modalChange({setting:true, modalType:'root'}))}>Create a Character</a>
          </div>
          { this.state.hash && <div id='id-key'>{this.state.hash.replace('#', '')}</div> }
        </div>

        { !!this.state.hash && this._mainDisplay(view) }
        {  !this.state.hash && LandingPage({createUser:this.props.createUser, dispatch:this.props.dispatch, modalChange}) }

        <Modal modalCB={modalChange} open={modal}>
          { type && this._content(type, modalChange) }
        </Modal>
        <Update />
        
        { loading && <div id='loading'><span/><span/><span/><span/></div> }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

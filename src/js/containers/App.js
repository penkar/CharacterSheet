import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Sheet from './Sheet.js';
import Loading from './Loading';

import Error from '../components/Error';
import Root from '../components/Root'
import Modal from '../components/Modal'
import {settingsChange, modalChange} from '../actions'
import {MenuContainer, Menu} from '../components/menu'

require('../../style/Base.scss')

const mapDispatchToProps = (dispatch)=>{
  return ({
    modalSetting: bindActionCreators(modalChange, dispatch),
    dispatch,
  })
}

const mapStateToProps = (state)=>{
  return ({
    modal: state.settingsReducer.modal,
    type: state.settingsReducer.modalType,
    loading: state.settingsReducer.loading,
  });
}

class App extends Component {
  _content(type) {
    switch (type) {
      case 'find':
      case 'character':
        return <Root />
      default:
        return null;
    }
  }

  render() {
    let {modalSetting, modal, type} = this.props;
    return (
      <div>
        <Sheet />
        <MenuContainer modalCB={modalSetting}/>

        <Modal modalCB={modalSetting} open={modal}>
          {type && ::this._content(type)}
        </Modal>

        {Loading(this.props.loading)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

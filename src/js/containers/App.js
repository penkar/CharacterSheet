import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import Sheet from './Sheet.js';
import Loading from './Loading';

import Root from '../components/Root'
import {settingsChange} from '../actions'

require('../../style/Base.scss')


const mapStateToProps = (state)=>{
  return ({
    loading: state.settingsReducer.loading,
  });
}

class App extends Component {
  _content() {
    let {hash} = window.location;
    if(!hash){
      return <Root />
    } else {
      return <Sheet />
    }
  }

  render() {
    return (
      <div>
        {::this._content()}
        {Loading(this.props.loading)}
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)

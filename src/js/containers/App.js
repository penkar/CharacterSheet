import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import Sheet from './Sheet.js';
import Loading from './Loading';

import Error from '../components/Error';
import Root from '../components/Root'
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
    let {hash} = window.location;
    hash = hash.substr(1,hash.length);
    if(!hash){
      return <Root />
    } else if (hash === 'error'){
      return <Error/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Sync from 'react-icons/lib/md/sync'
import {updateUser} from '../utilities/apiUtilities'

const mapDispatchToProps = (dispatch) => ({
  update: bindActionCreators(updateUser, dispatch),
  dispatch,
})
const mapStateToProps = (state) => ({
  user: {
    abilityReducer: state.abilityReducer,
    attackDefenseReducer: state.attackDefenseReducer,
    characterNameReducer: state.characterNameReducer,
    characterBioReducer: state.characterBioReducer,
    magicReducer: state.magicReducer,
    skillsReducer: state.skillsReducer,
  }
})

class UpdateComponent extends Component {
  _update() {
    let hash = window.location.hash.substr(1, window.location.hash.length);
    let {update, dispatch, user} = this.props;
    if(hash) return update(hash, dispatch, user);
  }

  render() {
    return <Sync id='update' onClick={::this._update}/>
  }
}
const Update = connect(mapStateToProps, mapDispatchToProps)(UpdateComponent);
export {Update}

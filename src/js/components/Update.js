import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Sync from 'react-icons/lib/md/sync'
import * as actions from '../utilities/apiUtilities'

const mapDispatchToProps = (dispatch) => ({
  updateUser: bindActionCreators(actions.updateUser, dispatch),
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

class UpdateComponent extends React.Component {
  _update = () => {
    let hash = window.location.hash.substr(1, window.location.hash.length);
    let {updateUser, dispatch, user} = this.props;
    if(hash) return updateUser(hash, dispatch, user);
  }

  render = () => <Sync id='update' onClick={this._update}/>
}
const Update = connect(mapStateToProps, mapDispatchToProps)(UpdateComponent);
export {Update}

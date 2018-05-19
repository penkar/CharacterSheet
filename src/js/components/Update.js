import React from 'react'
import cn from 'classnames'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Sync from 'react-icons/lib/md/sync'
import * as actions from '../utilities/apiUtilities'

const mapDispatchToProps = (dispatch) => ({
  updateUser: bindActionCreators(actions.updateUser, dispatch),
  dispatch,
});
const mapStateToProps = (state) => ({
  pending:state.settingsReducer.pending,
  user: {
    abilityReducer:state.abilityReducer,
    attackDefenseReducer:state.attackDefenseReducer,
    characterNameReducer:state.characterNameReducer,
    characterBioReducer:state.characterBioReducer,
    featsReducer:state.featsReducer,
    magicReducer:state.magicReducer,
    skillsReducer:state.skillsReducer,
  }
});

class UpdateComponent extends React.Component {
  componentDidMount = () => {
    window.onbeforeunload = this._onbeforeunload
  }

  _update = () => {
    let hash = window.location.hash.substr(1, window.location.hash.length);
    let {updateUser, dispatch, user} = this.props;
    if(hash) return updateUser(hash, dispatch, user);
  }

  _onbeforeunload = (e) => {
    if(this.props.pending) {
      var dialogText = 'Changes have been made. Save before leaving?';
      e.returnValue = dialogText;
      return dialogText;
    }
    return null;
  }

  render = () => <Sync id='update' onClick={this._update} className={cn({pending:this.props.pending})}/>
}
const Update = connect(mapStateToProps, mapDispatchToProps)(UpdateComponent);
export {Update}

import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as constants from '../constants'
import * as actions from '../actions'
import * as dnd from '../components/dnd';

const mapStateToProps = (state) => ({feats:state.featsReducer});
const mapDispatchToActions = (dispatch) => ({change: bindActionCreators(actions.changeScore, dispatch)})

class FeatsSheet extends React.Component {
  render() {
    return (
      <div id="feats-sheet">
        { dnd.Feats(Object.assign({open:true}, this.props)) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(FeatsSheet)

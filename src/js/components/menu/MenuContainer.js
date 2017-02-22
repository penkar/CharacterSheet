import React, {Component, PropTypes} from 'react'
import View from './View'
import Firebase from 'firebase'
import Menu from 'react-icons/lib/md/menu'

export default class MenuContainer extends Component {
  static propTypes = {
    modalCB: PropTypes.func,
    viewCB: PropTypes.func,
  }

  constructor() {
    super();
    this.state = {
      open: false,
    }
  }

  _toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    let {open, section, view} = this.state, {viewCB} = this.props;
    return (
      <div id='menu-container'>
        <Menu id='menu' onClick={::this._toggle}/>
        <span onClick={::this._toggle} >
          {open && View(viewCB)}
        </span>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'
import View from './View'
import Menu from 'react-icons/lib/md/menu'
import AuthBegin from './AuthBegin'

export default class MenuContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
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
    let {open, section, view} = this.state, {viewCB, user} = this.props;
    return (
      <div id='menu-container'>
        <Menu id='menu' onClick={::this._toggle}/>
        <AuthBegin />
        <span onClick={::this._toggle} >
          {open && View(viewCB)}
        </span>
      </div>
    )
  }
}

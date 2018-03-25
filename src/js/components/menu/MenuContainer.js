import React from 'react'
import {View} from './View'
import Menu from 'react-icons/lib/md/menu'

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  _toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    let {open, viewCB, user, signout, modalCB, changeMenu} = this.props;
    return (
      <div id='menu-container'>
        <Menu id='menu' onClick={changeMenu}/>
        <span onClick={this._toggle} >
          { View(viewCB, modalCB, open) }
        </span>
      </div>
    )
  }
}
export {MenuContainer}

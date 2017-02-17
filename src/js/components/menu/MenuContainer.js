import React, {Component} from 'react'
import Menu from './Menu'

export default class MenuContainer extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      section: false,
    }
  }

  _toggle() {
    this.setState({
      open: !this.state.open,
      section: false
    });
  }

  render() {
    let {open} = this.state;
    return (
      <div id='menu-container' className={open ? 'open' : 'closed'}>
        <span onClick={::this._toggle} className='equiv'>&prod;</span>
        { open && Menu()}
      </div>
    )
  }
}

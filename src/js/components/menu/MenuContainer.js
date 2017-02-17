import React, {Component, PropTypes} from 'react'
import Menu from './Menu'

export default class MenuContainer extends Component {
  static propTypes = {
    modalCB: PropTypes.func,
  }

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

  _openBookmarks() {
    let {section} = this.state;
    if(section === 'bookmark') {
      this.setState({section: false});
    } else {
      this.setState({section: 'bookmark'});
    }
  }

  _modalCharacter() {
    this.props.modalCB({setting: true, modalType:'character'});
  }

  _modalFind() {
    this.props.modalCB({setting: true, modalType:'find'});
  }

  render() {
    let {open, section} = this.state;
    return (
      <div id='menu-container' className={open ? 'open' : 'closed'}>
        <span onClick={::this._toggle} className='equiv'>&prod;</span>
        <div>
          <div><a onClick={::this._modalCharacter}>Create Character</a></div>
          <div><a onClick={::this._modalFind}>Find Character</a></div>
          <div><a onClick={::this._openBookmarks}>Book Marks:</a></div>
          <span onClick={::this._toggle}>
            {section === 'bookmark' &&  Menu()}
          </span>
        </div>
      </div>
    )
  }
}

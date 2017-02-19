import React, {Component, PropTypes} from 'react'
import Menu from './Menu'
import View from './View'

export default class MenuContainer extends Component {
  static propTypes = {
    modalCB: PropTypes.func,
    viewCB: PropTypes.func,
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
    ::this._changeSection('bookmark');
  }

  _openViews() {
    ::this._changeSection('views');
  }

  _changeSection(sect) {
    let {section} = this.state;
    if(section === sect) {
      this.setState({section: false});
    } else {
      this.setState({section: sect})
    }
  }

  _modalCharacter() {
    this.props.modalCB({setting: true, modalType:'character'});
  }

  _modalFind() {
    this.props.modalCB({setting: true, modalType:'find'});
  }

  render() {
    let {open, section, view} = this.state, {viewCB} = this.props;
    return (
      <div id='menu-container' className={open ? 'open' : 'closed'}>
        <span onClick={::this._toggle} className='equiv'>&prod;</span>
        <div>
          <div><a onClick={::this._modalCharacter}>Create Character</a></div>
          <div><a onClick={::this._modalFind}>Find Character</a></div>
          <div><a onClick={::this._openBookmarks}>Book Marks:</a></div>
          <div><a onClick={::this._openViews}>Change View:</a></div>
          <span onClick={::this._toggle}>
            {section === 'views' &&  View(viewCB)}
            {section === 'bookmark' &&  Menu()}
          </span>
        </div>
      </div>
    )
  }
}

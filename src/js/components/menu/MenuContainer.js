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
    this.setState({section: false, open: false});
    this.props.modalCB({setting: true, modalType:'char'});
  }

  render() {
    let {open, section, view} = this.state, {viewCB} = this.props;
    return (
      <div id='menu-container' className={open ? 'open' : 'closed'}>
        <span onClick={::this._toggle} className='equiv'>&prod;</span>
        <div className='menu-buttons'>
          <button className='success' onClick={::this._modalCharacter}>Characters</button>
          <button className='primary' onClick={::this._openBookmarks}>Book Marks:</button>
          <button className='primary' onClick={::this._openViews}>Change View:</button>
          <span onClick={::this._toggle}>
            {section === 'views' &&  View(viewCB)}
            {section === 'bookmark' &&  Menu()}
          </span>
        </div>
      </div>
    )
  }
}

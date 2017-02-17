import React, {Component, PropTypes} from 'react'

export default class Modal extends Component {
  static propTypes = {
    modalCB: PropTypes.func,
    open: PropTypes.bool,
  }

  _click() {
    this.props.modalCB({setting: false, modalType: ''});
  }

  render() {
    let {open} = this.props;
    return (
      <div className='overlay' onClick={::this._click} style={open ? {} : {display:'none'}}>
        <div id='modal'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

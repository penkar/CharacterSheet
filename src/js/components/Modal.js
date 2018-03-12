import React, {Component} from 'react'
class Modal extends Component {
  _modalClick = (event) => {
    event.stopPropagation();
  }

  _overlayClick = () => {
    this.props.modalCB({setting: false, modalType: ''});
  }

  render() {
    let {open} = this.props;
    return (
      <div className='overlay' onClick={this._overlayClick} style={open ? {} : {display:'none'}}>
        <div id='modal' onClick={this._modalClick}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export {Modal}

import React from 'react'
class Modal extends React.Component {
  render () {
    let {open, modalCB} = this.props;
    return (
      <div className='overlay' onClick={
        () => modalCB({setting: false, modalType: ''})
      } style={open ? {} : {display:'none'}}>
        <div id='modal' onClick={(event) => event.stopPropagation()}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export {Modal}

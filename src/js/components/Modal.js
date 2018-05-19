import React from 'react'
class Modal extends React.Component {
  render = () => (
    <div
      className='overlay'
      onClick={ () => this.props.modalCB({setting: false, modalType: ''}) }
      style={this.props.open ? {} : {display:'none'}}>
      
      <div id='modal' onClick={(event) => event.stopPropagation()}>
        { this.props.children }
      </div>
      
    </div>
  );
}

export {Modal}

import React, {Component} from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div className='overlay'>
        <div id='modal'>
        {this.props.children}
        </div>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'

export default class Root extends Component {
  _submit() {
    console.log(this.in.value);
  }

  _keypress(e) {
    if(e.key === 'Enter' || e.code === 'Enter') {
      ::this._submit()
    }
  }

  _click() {
    console.log(15);
  }

  render() {
    return (
      <div id='root'>
        <div className='title'>Character Sheet</div>
        <div className='content'>
          <div>
            <div>Create A New Character</div>
            <div>&nbsp;</div>
            <div onClick={::this._click} className='btn'>NEW</div>
          </div>
          <div>
            <div>Get An Existing Character:</div>
            <div><input placeholder='Identifier' onChange={::this._keypress} ref={(el)=>(this.in=el)}/></div>
            <div onClick={::this._submit} className='btn'>Search</div>
          </div>
        </div>
      </div>
    )
  }
}

import React, {PropTypes, Component} from 'react'

export default class Spell extends Component {
  static PropTypes = {
    change: PropTypes.func,
    level: PropTypes.string,
  }

  _keypress(e) {
    if (e.target.code == 'Enter' || e.target.key == 'Enter') {
      ::this._enter();
    }
  }

  _enter() {
    let {value} = this.in, {change, level} = this.props
    if(!value) return null;
    change({level, newspell:true, value});
  }

  render() {
    return (
      <div className='spell'>
        <input type='checkbox' checked={false}/>
        <div>
          <input ref={(el)=>(this.in = el)} placeholder='Spell Name' onKeyPress={::this._keypress}/>
          <span onClick={::this._enter}>+</span>
        </div>
      </div>
    )
  }
}

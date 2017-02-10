import React, {Component, PropTypes} from 'react'
import {Input} from '../generics'


export default class Header3 extends Component {
  static propTypes = {
    change: PropTypes.func,
    magic: PropTypes.object,
  }

  _change() {
    let {change} = this.props,  value = {spellcastingClass: this.a.value, spellcastingAbility: this.b.value, spellSaveDC: this.c.value, spellSaveBonus: this.d.value,}
    change({strings:true, value})
  }

  render() {
    let {change} = this.props;
    return (
      <div id='header3'>
        <div>
          <input ref={(el)=>this.a = el} onChange={::this._change} placeholder='Spell Casting Class'></input>
          <div>Spell Casting Class</div>
        </div>
        <div>
          <input ref={(el)=>this.b = el} onChange={::this._change} placeholder='Spell Casting Ability'></input>
          <div>Spell Casting Ability</div>
        </div>
        <div>
          <input ref={(el)=>this.c = el} onChange={::this._change} placeholder='Spell Save DC'></input>
          <div>Spell Save DC</div>
        </div>
        <div>
          <input ref={(el)=>this.d = el} onChange={::this._change} placeholder='Spell Attack Bonus'></input>
          <div>Spell Attack Bonus</div>
        </div>
      </div>
    )
  }
}

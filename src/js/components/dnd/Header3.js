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
    let {change, magic} = this.props;
    return (
      <div id='header3' className='pure-g sectional'>
        <div className='pure-u-1 pure-u-lg-2-24' />

        <div className='pure-u-1-2 pure-u-lg-5-24'>
          <input ref={(el)=>this.a = el} onChange={::this._change} placeholder='Spell Casting Class' value={magic.spellcastingClass} />
          <div>Spell Casting Class</div>
        </div>

        <div className='pure-u-1-2 pure-u-lg-5-24'>
          <input ref={(el)=>this.b = el} onChange={::this._change} placeholder='Spell Casting Ability' value={magic.spellcastingAbility}/>
          <div>Spell Casting Ability</div>
        </div>

        <div className='pure-u-1-2 pure-u-lg-5-24'>
          <input ref={(el)=>this.c = el} onChange={::this._change} placeholder='Spell Save DC' value={magic.spellSaveDC}/>
          <div>Spell Save DC</div>
        </div>

        <div className='pure-u-1-2 pure-u-lg-5-24'>
          <input ref={(el)=>this.d = el} onChange={::this._change} placeholder='Spell Attack Bonus' value={magic.spellSaveBonus}/>
          <div>Spell Attack Bonus</div>
        </div>
      </div>
    )
  }
}

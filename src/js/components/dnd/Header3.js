import React, {Component, PropTypes} from 'react'
import {Input} from '../generics'


export default class Header3 extends Component {
  static propTypes = {

  }

  render() {
    let {change} = this.props;
    return (
      <div id='header3'>
        <div>
          <input placeholder='Spell Casting Class'></input>
          <div>Spell Casting Class</div>
        </div>
        <div>
          <input placeholder='Spell Casting Ability'></input>
          <div>Spell Casting Ability</div>
        </div>
        <div>
          <input placeholder='Spell Save DC'></input>
          <div>Spell Save DC</div>
        </div>
        <div>
          <input placeholder='Spell Attack Bonus'></input>
          <div>Spell Attack Bonus</div>
        </div>
      </div>
    )
  }
}

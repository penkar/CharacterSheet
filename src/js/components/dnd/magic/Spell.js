import React, {PropTypes, Component} from 'react'

export default class Spell extends Component {
  static PropTypes = {
    spell: PropTypes.object,
    change: PropTypes.func,
    i: PropTypes.number,
    level: PropTypes.string,
  }

  _click() {
    let {i, level, change, spell} = this.props;
    change({level, i, prepared: !spell.prepared});
  }

  _remove() {
    let {i, level, change, spell} = this.props;
    change({level, i, oldspell: true});
  }

  render() {
    let {prepared, name} = this.props.spell;
    return (
      <div className='spell'>
        <input type='checkbox' checked={prepared} onChange={::this._click} />
        <div>{name}</div>
        <span style={{color:'red', fontSize:'1.5rem'}} onClick={::this._remove}>&nbsp;-</span>
      </div>
    )
  }
}

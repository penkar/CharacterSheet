import React, {PropTypes, Component} from 'react'
import Spell from './Spell'
import NewSpell from './NewSpell'

export default class SpellLevel extends Component {
  static propTypes = {
    level: PropTypes.string,
    spells: PropTypes.array,
    stock: PropTypes.string,
    change: PropTypes.func,
  }

  _total(e) {
    let {change, level} = this.props, {value} = e.target;
    change({level, total:true, })
  }

  _cantrip(level) {
    if(level === '0') {
      return(
        <div className='spelllevel' key={level}>
          <div className='lvl'>{level}</div>
          <div>CANTRIP</div>
          <span>&nbsp;</span>
        </div>
      )
    } else {
      return(
        <div className='spelllevel' key={level}>
          <div className='lvl'>{level}</div>
          <div><input placeholder='Spell Total' onChange={::this._total} className='total'/></div>,
          <div><input placeholder='Spell Expended' className='expended'/></div>
        </div>
      )
    }
  }

  render() {
    let {level, spells, stock, change,} = this.props;
    return (
      <div>
        {::this._cantrip(level)}
        <div className='spells'>
          <div className='spell descriptor'>
            <div>Prepared</div>&nbsp;
            <div>Spell Name</div>
          </div>
          <div>
            {spells.map((x, i)=> (<Spell key={i} i={i} spell={x} change={change} level={level}/>))}
          </div>
          <div>
            <NewSpell key='new' change={change} level={level}/>
          </div>
        </div>
      </div>
    )
  }
}

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
    change({level, total:true, value});
  }

  _cantrip(level) {
    if(level === '0') {
      return <div className='spelllevel' key={level}>CANTRIPS</div>
    } else {
      return(
        <div className='spelllevel' key={level}>
          Level {level}
          <input placeholder='Total' onChange={::this._total} className='total'/>&nbsp;
          <input placeholder='Spell Expended' className='expended'/>
        </div>
      )
    }
  }

  render() {
    let {level, spells, stock, change,} = this.props;
    return (
      <div className='level sectional pure-u-1 pure-u-lg-1-4'>
        { ::this._cantrip(level) }
        {spells.map((x, i)=> (<Spell key={i} i={i} spell={x} change={change} level={level}/>))}
        <NewSpell key='new' change={change} level={level}/>
      </div>
    )
  }
}

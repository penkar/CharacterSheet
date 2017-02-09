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

  constructor(props) {
    super(props);
    this.state = {new: true}
  }

  _total(e) {
    let {change, level} = this.props, {value} = e.target;
    change({level, total:true, })
  }

  render() {
    let {level, spells, stock, change,} = this.props;
    return (
      <div>
        <div className='spelllevel' key={level}>
          <div className='lvl'>{level}</div>
          <div><input placeholder='Spell Total' onChange={::this._total} className='total'/></div>
          <div><input placeholder='Spell Expended' className='expended'/></div>
        </div>
        <div className='spells'>
          <div className='spell descriptor'>
            <div>Prepared</div>&nbsp;
              <div>Spell Name</div>
            </div>
            <div>
              {this.state.new && <NewSpell key='new' change={change} level={level}/>}
            </div>
            <div>
              {spells.map((x, i)=> (<Spell key={i} i={i} spell={x} change={change} level={level}/>))}
            </div>
        </div>
      </div>
    )
  }
}

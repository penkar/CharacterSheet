import React from 'react';
import cn from 'classnames';
import {Spells} from '../components/dnd/magic/Spells1.js';

class Spell extends React.Component {
  shouldComponentUpdate = (nextProps) => nextProps.hide !==  this.props.hide;
  render = () => {
    let {name, lvl, cst, desc, dur, rng, type, hide} = this.props;
    return (
      <div key={name} className={cn('pure-u-1', 'pure-u-lg-24-24', 'sectional', {hide})}>
        <div key='name'>Name: {name}</div>
        <div key='lvl'>Level: {lvl}</div>
        <div key='cst'>Casting: {cst}</div>
        <div key='desc'>Description: {desc}</div>
        <div key='dur'>Duration: {dur}</div>
        <div key='r'>Range: {rng}</div>
        <div key='s'>Type: {type}</div>
      </div>
    );
  }
}

const SpellSheet = ({filter, change}) => {
  let _onChange = ({target}) => {
    change({key:'filter', value:target.value});
  }, regex = new RegExp(filter, "i");
  return (
    <div className='pure-g' key='spell-sheet'>
      <div key='input' className='pure-u-1 pure-u-lg-24-24 sectional'>
        <input onChange={_onChange} name='spell-filter' placeholder="Filter spells by..." />
      </div>
      { Spells.map((spell) => <Spell {...spell} hide={!spell.name.match(regex)} /> ) }
    </div>
  )
}
export default SpellSheet;

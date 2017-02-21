import React, {Component, PropTypes} from 'react'
import Field from './Field';
import DeathSaves from './DeathSaves';
import HitDie from './HitDie';

export default class Health extends Component {
  static propTypes = {
    change: PropTypes.func,

    attack1: PropTypes.object,
    attack2: PropTypes.object,
    attack3: PropTypes.object,
    attacksAndSpells: PropTypes.string,

    armorClass: PropTypes.number,
    initiative: PropTypes.number,
    speed: PropTypes.number,

    hitPoints: PropTypes.number,
    currentHitPoints: PropTypes.number,
    temporaryHitPoints: PropTypes.number,

    hitDie: PropTypes.number,
    hitDieTotal: PropTypes.string,
    failures: PropTypes.number,
    successes: PropTypes.number,
  }

  render() {
    let {props} = this, {change} = this.props;
    return (
      <div id='health' className='sectional'>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <Field field='armorClass' value={props.armorClass} name='Armor Class' change={change}/>
          <Field field='initiative' value={props.initiative} name='Initiative' change={change}/>
          <Field field='speed' value={props.speed} name='Speed' change={change}/>
        </div>

        <br/>
        <Field field='hitPoints' value={props.hitPoints} name='Hit Point Maximum' change={change}/>
        <br/>
        <Field field='exhaustion' value={props.exhaustion} name='Exhaustion' change={change}/>
        <br/>
        <Field field='currentHitPoints' value={props.currentHitPoints} name='Current Hit Points' change={change}/>
        <br/>
        <Field field='temporaryHitPoints' value={props.temporaryHitPoints} name='Temporary Hit Points' change={change}/>
        <br/>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <HitDie hitDie={props.hitDie} hitDieTotal={props.hitDieTotal} change={change}/>
          <DeathSaves failures={props.failures} successes={props.successes} change={change}/>
        </div>
      </div>
    )
  }
}

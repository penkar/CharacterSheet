import React, {Component, PropTypes} from 'react'
import Field from './Field';
import DeathSaves from './DeathSaves';
import HitDie from './HitDie';

export default class Health extends Component {
  static propTypes = {
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

    hitDice: PropTypes.number,
    hitDiceTotal: PropTypes.number,
    failures: PropTypes.number,
    successes: PropTypes.number,
  }

  render() {
    let {props} = this;
    return (
      <div id='health'>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <Field field='armorClass' value={props.armorClass} name='Armor Class'/>
          <Field field='initiative' value={props.initiative} name='Initiative'/>
          <Field field='speed' value={props.speed} name='Speed'/>
        </div>

        <Field field='hitPoints' value={props.hitPoints} name='Hit Point Maximum'/>
        <Field field='currentHitPoints' value={props.currentHitPoints} name='Current Hit Points'/>
        <Field field='temporaryHitPoints' value={props.temporaryHitPoints} name='Temporary Hit Points'/>

        <div style={{display:'flex', flexDirection:'row'}}>
          <HitDie hitDie={props.hitDie} hitDieTotal={props.hitDieTotal} />
          <DeathSaves failures={props.failures} successes={props.successes}/>
        </div>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'
import {Input} from '../generics'


export default class Header1 extends Component {
  _row1() {
    let {props} = this;
    return (
      <tr>
        <td></td>
        <td className='ll t'><Input placeholder={props.class} value={props.class} specific='' field='class'/></td>
        <td className='t'><Input placeholder={props.background} value={props.background} specific='' field='background'/></td>
        <td className='t'><Input placeholder={props.playerName} value={props.playerName} specific='' field='playerName'/></td>
        <td className='rr t'><Input placeholder={props.faction} value={props.faction} specific='' field='faction'/></td>
      </tr>
    )
  }

  _row2() {
    return (
      <tr>
        <td></td>
        <td className='ll'>Class & Level</td>
        <td>Background</td>
        <td>Player Name</td>
        <td className='rr'>Faction</td>
      </tr>
    )
  }

  _row3() {
    let {props} = this;
    return (
      <tr>
        <td className='ll t b'><Input placeholder={props.characterName} value={props.characterName} specific='' field='characterName'/></td>
        <td className='ll'><Input placeholder={props.race} value={props.race} specific='' field='race'/></td>
        <td><Input placeholder={props.alignment} value={props.alignment} specific='' field='alignment'/></td>
        <td><Input placeholder={props.experiencePoints} value={props.experiencePoints} specific='' field='experiencePoints'/></td>
        <td className='rr'><Input placeholder={props.dciNumber} value={props.dciNumber} specific='' field='dciNumber'/></td>
      </tr>
    )
  }

  _row4() {
    return (
      <tr>
        <td>Character Name</td>
        <td className='ll b'>Race</td>
        <td className='b'>Alignment</td>
        <td className='b'>Experience Points</td>
        <td className='rr b'>DCI Number</td>
      </tr>
    )
  }

  render() {
    return (
      <table id='sheet-header' cellSpacing='0'>
        <tbody>
          {::this._row1()}
          {::this._row2()}
          {::this._row3()}
          {::this._row4()}
        </tbody>
      </table>
    )
  }
}

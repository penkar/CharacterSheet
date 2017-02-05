import React, {Component, PropTypes} from 'react'
import {Input} from '../generics'


export default class Header1 extends Component {
  _row1(change) {
    let {props} = this;
    return (
      <tr>
        <td></td>
        <td className='ll t'>
          <Input placeholder={props.class} value={props.class} specific='' field='class' change={change}/>
        </td>
        <td className='t'>
          <Input placeholder={props.background} value={props.background} specific='' field='background' change={change}/>
        </td>
        <td className='t'>
          <Input placeholder={props.playerName} value={props.playerName} specific='' field='playerName' change={change}/>
        </td>
        <td className='rr t'>
          <Input placeholder={props.faction} value={props.faction} specific='' field='faction' change={change}/>
        </td>
      </tr>
    )
  }

  _row2(change) {
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

  _row3(change) {
    let {props} = this;
    return (
      <tr>
        <td className='ll t b'>
          <Input placeholder={props.characterName} value={props.characterName} specific='' field='characterName' change={change}/>
        </td>
        <td className='ll'>
          <Input placeholder={props.race} value={props.race} specific='' field='race' change={change}/>
        </td>
        <td>
          <Input placeholder={props.alignment} value={props.alignment} specific='' field='alignment' change={change}/>
        </td>
        <td>
          <Input placeholder={props.experiencePoints} value={props.experiencePoints} specific='' field='experiencePoints' change={change}/>
        </td>
        <td className='rr'>
          <Input placeholder={props.dciNumber} value={props.dciNumber} specific='' field='dciNumber' change={change}/>
        </td>
      </tr>
    )
  }

  _row4(change) {
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
    let {change} = this.props;
    return (
      <table id='sheet-header' cellSpacing='0'>
        <tbody>
          {::this._row1(change)}
          {::this._row2(change)}
          {::this._row3(change)}
          {::this._row4(change)}
        </tbody>
      </table>
    )
  }
}

import React, {Component, PropTypes} from 'react'
import {Input} from '../generics'


export default class Header extends Component {
  _row1() {
    let {props} = this;
    return (
      <tr>
        <td></td>
        <td><Input placeholder={props.class} value={props.class} specific='' field='class'/></td>
        <td><Input placeholder={props.background} value={props.background} specific='' field='background'/></td>
        <td><Input placeholder={props.playerName} value={props.playerName} specific='' field='playerName'/></td>
        <td><Input placeholder={props.faction} value={props.faction} specific='' field='faction'/></td>
      </tr>
    )
  }

  _row2() {
    return (
      <tr>
        <td></td>
        <td>Class & Level</td>
        <td>Background</td>
        <td>Player Name</td>
        <td>Faction</td>
      </tr>
    )
  }

  _row3() {
    return (
      <tr>
        <td><Input placeholder={''} value={''} specific='' field='characterName'/></td>
        <td><Input placeholder={''} value={''} specific='' field='race'/></td>
        <td><Input placeholder={''} value={''} specific='' field='alignment'/></td>
        <td><Input placeholder={''} value={''} specific='' field='experiencePoints'/></td>
        <td><Input placeholder={''} value={''} specific='' field='dciNumber'/></td>
      </tr>
    )
  }

  _row4() {
    return (
      <tr>
        <td>Character Name</td>
        <td>Race</td>
        <td>Alignment</td>
        <td>Experience Points</td>
        <td>DCI Number</td>
      </tr>
    )
  }

  render() {
    let {characterNameReducer} = this.props;
    return (
      <table id='sheet-header'>
        <tbody>
          {::this._row1(characterNameReducer)}
          {::this._row2(characterNameReducer)}
          {::this._row3(characterNameReducer)}
          {::this._row4(characterNameReducer)}
        </tbody>
      </table>
    )
  }
}

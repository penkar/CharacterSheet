import React, {Component, PropTypes} from 'react'
import {Input} from '../generics'


export default class Header2 extends Component {
  _row1() {
    let {props} = this;
    return (
      <tr>
        <td></td>
        <td><Input placeholder={props.age} value={props.age} specific='' field='age'/></td>
        <td><Input placeholder={props.height} value={props.height} specific='' field='height'/></td>
        <td><Input placeholder={props.weight} value={props.weight} specific='' field='weight'/></td>
      </tr>
    )
  }

  _row2() {
    return (
      <tr>
        <td></td>
        <td>Age</td>
        <td>Height</td>
        <td>Weight</td>
      </tr>
    )
  }

  _row3() {
    let {props} = this;
    return (
      <tr>
        <td><Input placeholder={props.characterName} value={props.characterName} specific='' field='characterName'/></td>
        <td><Input placeholder={props.eyes} value={props.eyes} specific='' field='eyes'/></td>
        <td><Input placeholder={props.skin} value={props.skin} specific='' field='skin'/></td>
        <td><Input placeholder={props.hair} value={props.hair} specific='' field='hair'/></td>
      </tr>
    )
  }

  _row4() {
    return (
      <tr>
        <td>Character Name</td>
        <td>Eyes</td>
        <td>Skin</td>
        <td>Hair</td>
      </tr>
    )
  }

  render() {
    return (
      <table id='sheet-header'>
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

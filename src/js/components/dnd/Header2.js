import React, {Component, PropTypes} from 'react'
import {Input} from '../generics'


export default class Header2 extends Component {
  _row1(change) {
    let {props} = this;
    return (
      <tr>
        <td></td>
        <td className='ll t'>
          <Input placeholder={props.age} value={props.age} specific='' field='age' change={change}/>
        </td>
        <td className='t'>
          <Input placeholder={props.height} value={props.height} specific='' field='height' change={change}/>
        </td>
        <td className='rr t'>
          <Input placeholder={props.weight} value={props.weight} specific='' field='weight' change={change}/>
        </td>
      </tr>
    )
  }

  _row2() {
    return (
      <tr>
        <td></td>
        <td className='ll'>Age</td>
        <td>Height</td>
        <td className='rr'>Weight</td>
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
          <Input placeholder={props.eyes} value={props.eyes} specific='' field='eyes' change={change}/>
        </td>
        <td>
          <Input placeholder={props.skin} value={props.skin} specific='' field='skin' change={change}/>
        </td>
        <td className='rr'>
          <Input placeholder={props.hair} value={props.hair} specific='' field='hair' change={change}/>
        </td>
      </tr>
    )
  }

  _row4() {
    return (
      <tr>
        <td>Character Name</td>
        <td className='ll b'>Eyes</td>
        <td className='b'>Skin</td>
        <td className='rr b'>Hair</td>
      </tr>
    )
  }

  render() {
    let {change} = this.props;
    return (
      <table id='sheet-header' cellSpacing='0'>
        <tbody>
          {::this._row1(change)}
          {::this._row2()}
          {::this._row3(change)}
          {::this._row4()}
        </tbody>
      </table>
    )
  }
}

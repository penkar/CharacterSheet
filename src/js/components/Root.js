import React, {Component, PropTypes} from 'react'
import TOS from './TOS'

export default class Root extends Component {
  static propTypes = {
    createUser: PropTypes.func,
    createChar: PropTypes.func,
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      tos: false,
    }
  }

  _tosView() {
    this.setState({tos: !this.state.tos});
  }

  _searchClick() {

  }

  _newClick() {
    let {dispatch, createUser} = this.props;
    let id = (new Date).getTime()
    createUser(id, dispatch)
  }

  render() {
    let {tos} = this.state;
    return (
      <div id='root'>
        <div className='content pure-g'>

          <h2 className='pure-u-1' style={{textAlign:'center'}}>Character Sheet</h2>

          <div style={{lineHeight:'1.5rem'}}/>

          <div className='pure-u-1 pure-u-lg-1-2'>
            Create A New Character
          </div>

          <div className='pure-u-1 pure-u-lg-1-2' style={{textAlign:'right'}}>
            <button onClick={::this._newClick} className='success'>NEW</button>
          </div>

          <div style={{lineHeight:'1.5rem'}} className='pure-u-1'>&nbsp;</div>

          <div className='pure-u-1 pure-u-lg-1-2'>
            <div>Find a Character:</div>
          </div>

          <div className='pure-u-1 pure-u-lg-1-2' style={{textAlign:'right'}}>
            <input placeholder='Identifier' ref={(el)=>(this.in=el)}/>
          </div>

          <div style={{lineHeight:'1.5rem'}} className='pure-u-1'>&nbsp;</div>

          <div className='pure-u-1 pure-u-lg-1-2' />

          <div className='pure-u-1 pure-u-lg-1-2' style={{textAlign:'right'}}>
            <button onClick={::this._searchClick} className='primary'>Search</button>
          </div>


        </div>
        <p>Developer Notes:</p>
        <p>CharSheet-3EBFD is a  completely free to use application connected to <a href='https://www.firebase.com/'>Google Firebase</a> and like wise hosted through <a href='https://firebase.google.com/docs/hosting/'>Firebase</a></p>
        <p>There are no accounts associated with a character sheet, and no authentication. Anyone can view any character sheet, and anyone can modify it.</p>
        <p>Feedback accepted only by request. Before usage please review the terms of service below.</p>
        <button onClick={::this._tosView}>View Terms of Service</button>
        { tos && <TOS /> }
      </div>
    )
  }
}

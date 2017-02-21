import React, {Component, PropTypes} from 'react'

export default class Root extends Component {
  _searchClick() {

  }

  _newClick() {
    console.log(15);
  }

  render() {
    return (
      <div id='root'>
        <div className='content pure-g'>

          <h2 className='pure-u-1' style={{textAlign:'center'}}>Character Sheet</h2>

          <div style={{lineHeight:'1.5rem'}}/>

          <div className='pure-u-1 pure-u-lg-20-24'>
            Create A New Character
          </div>

          <div className='pure-u-1 pure-u-lg-4-24'>
            <button onClick={::this._newClick} className='success'>NEW</button>
          </div>

          <div style={{lineHeight:'1.5rem'}} className='pure-u-1'>&nbsp;</div>

          <div className='pure-u-1 pure-u-lg-20-24'>
            <div>Find a Character:</div>
          </div>

          <div className='pure-u-1 pure-u-lg-4-24'>
            <input placeholder='Identifier' ref={(el)=>(this.in=el)}/>
          </div>

          <div style={{lineHeight:'1.5rem'}} className='pure-u-1'>&nbsp;</div>

          <div className='pure-u-1 pure-u-lg-20-24' />

          <div className='pure-u-1 pure-u-lg-4-24'>
            <button onClick={::this._searchClick} className='primary'>Search</button>
          </div>
        </div>
      </div>
    )
  }
}

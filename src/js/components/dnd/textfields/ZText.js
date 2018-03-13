import React, {Component} from 'react'

export default class Treasure extends Component {
  _onChange = (e) => {
    let value = e.target.value, {change, field} = this.props;
    change({value, field});
  }

  render() {
    let {rows, cols, text, id, string, klass} = this.props;
    return (
      <div id={id} className={`ztext sectional ${klass || ''}`}>
        <textarea rows={rows} cols={cols} value={text} onChange={this._onChange}/>
        <br/>
        <span className='bold'>{string}</span>
      </div>
    )
  }
}

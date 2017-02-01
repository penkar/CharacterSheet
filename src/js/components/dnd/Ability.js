import React, {Component, PropTypes} from 'react'

export default class Ability extends Component {
  static propTypes = {
    modifier: PropTypes.number,
    placeholder: PropTypes.number,
    value: PropTypes.number,
    field: PropTypes.string
  }

  render() {
    let {field} = this.props;
    return (
      <div key={`${field}_ability`} className='ability'>
        <div>
          <span className='clearfix'>{field}</span>
          <input className='score'/>
        </div>
        <input className='modifier'/>
      </div>
    )
  }
}

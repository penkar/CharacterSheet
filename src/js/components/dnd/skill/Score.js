import React, {Component, PropTypes} from 'react'

export default class Score extends Component {
  static propTypes = {
    field: PropTypes.string,
    obj: PropTypes.object,
    name: PropTypes.string,
  }

  render() {
    let {obj, name} = this.props;
    return (
      <div className='score'>
        <input checked={obj.checked} type='radio' />
        <input placeholder={obj.placeholder} value={obj.value} />
        <span>&nbsp;{name}</span>
      </div>
    )
  }
}

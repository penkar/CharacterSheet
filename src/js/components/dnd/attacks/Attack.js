import React, {PropTypes, Component} from 'react'

export default class Attack extends Component {
  static propTypes = {
    field: PropTypes.string,
    value: PropTypes.object,
  }

  render() {
    let {value} = this.props;
    return (
      <div className='attack'>
        <input key='name' value={value.name}/>
        <input key='bonus' value={value.bonus}/>
        <input key='dmg' value={value.dmg}/>
      </div>
    )
  }
}

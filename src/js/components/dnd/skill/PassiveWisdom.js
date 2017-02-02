import React, {Component, PropTypes} from 'react'

export default class PassiveWisdom extends Component {
  static propTypes = {
    passiveWisdom: PropTypes.object,
  }

  render() {
    let {passiveWisdom} = this.props;
    return (
      <div id='passivewisdom'>
        <input placeholder={passiveWisdom.placeholder} value={passiveWisdom.value}/>
        <span>Passive Wisdom (Perception)</span>
      </div>
    )
  }
}

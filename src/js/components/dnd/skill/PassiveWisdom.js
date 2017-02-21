import React, {Component, PropTypes} from 'react'

export default class PassiveWisdom extends Component {
  static propTypes = {
    passiveWisdom: PropTypes.object,
  }

  shouldComponentUpdate(next) {
    let {value, placeholder} = this.props.passiveWisdom;
    if(next.passiveWisdom.value === value && placeholder === next.passiveWisdom.placeholder) {
      return false;
    }
    return true;
  }

  _change(e) {
    let {change} = this.props, value = e.target.value;
    change({field:'passiveWisdom', value, affiliate:true});
  }

  render() {
    let {passiveWisdom} = this.props;
    return (
      <div id='passivewisdom' className='sectional'>
        <input placeholder={passiveWisdom.placeholder} value={passiveWisdom.value} onChange={::this._change}/>
        <span className='bold'>Passive Wisdom (Perception)</span>
      </div>
    )
  }
}

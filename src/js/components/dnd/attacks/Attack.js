import React, {PropTypes, Component} from 'react'

export default class Attack extends Component {
  static propTypes = {
    field: PropTypes.string,
    value: PropTypes.object,
  }

  shouldComponentUpdate(next) {
    let {name, bonus, dmg} = this.props.value;
    if(name === next.value.name && bonus === next.value.bonus && dmg === next.value.dmg) return false;
    return true;
  }

  _change(e) {
    let {field, change} = this.props;
    let value = {name: this.el1.value, dmg: this.el3.value, bonus: this.el2.value}
    change({value, field});
  }

  render() {
    let {value} = this.props;
    return (
      <div className='attack'>
        <input key='name' value={value.name} ref={(el1)=>(this.el1 = el1)} onChange={::this._change}/>
        <input key='bonus' value={value.bonus} ref={(el2)=>(this.el2 = el2)} onChange={::this._change}/>
        <input key='dmg' value={value.dmg} ref={(el3)=>(this.el3 = el3)} onChange={::this._change}/>
      </div>
    )
  }
}

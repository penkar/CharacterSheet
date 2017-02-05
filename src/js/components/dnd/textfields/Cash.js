import React, {PropTypes, Component} from 'react'

// const Cash = ({cash, change, field}) => {
//   return (
//     <div className='cash' key={field}>
//       {field}<input value={cash} onChange={change}></input>
//     </div>
//   )
// }
// export default Cash;


export default class Cash extends Component {
  static propTypes = {
    change: PropTypes.func,
    field: PropTypes.string,
    name: PropTypes.string,
    cash: PropTypes.number,
  }

  _onChange(e) {
    let value = e.target.value, {change, field} = this.props;
    change({field, value});
  }

  render() {
    let {change, cash, field} = this.props;
    return (
      <div className='cash' key={field}>
        {name}<input value={cash} onChange={::this._onChange}></input>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'
function Score ({obj, name, mod, pro}) {

  function _onChange() {
    let {change, field,} = this.props, value = this.in.value;
    change({field, value, ability:true,})
  }

  function _onChangeRadio() {
    let {change, field,} = this.props, checked = this.ck.checked;
    change({field, checked, radio:true,})
  }

  let placeholder = obj.placeholder + mod;
  if(obj.checked) placeholder += pro;
  return (
    <div className='score'>
      <input
        onChange={_onChangeRadio}
        checked={obj.checked}
        type='checkbox' />
      <input
        onChange={_onChange}
        placeholder={placeholder}
        value={obj.value || ''} />
      <span className='title'>{name}</span>
    </div>
  )
}

export default Score
// export default class Score extends Component {

// }

// export default class Score extends Component {
//   static propTypes = {
//     field: PropTypes.string,
//     obj: PropTypes.object,
//     name: PropTypes.string,
//     change: PropTypes.func,
//     pro: PropTypes.number,
//     mod: PropTypes.number,
//   }
//
//   shouldComponentUpdate(next) {
//     let {obj, mod, pro} = this.props;
//     if(JSON.stringify(obj) === JSON.stringify(next.obj) && mod === next.mod && next.pro === pro) {
//       return false;
//     }
//     return true;
//   }
//
//   _onChange() {
//     let {change, field,} = this.props, value = this.in.value;
//     change({field, value, ability:true,})
//   }
//
//   _onChangeRadio() {
//     let {change, field,} = this.props, checked = this.ck.checked;
//     change({field, checked, radio:true,})
//   }
//
//   render() {
//     let {obj, name, mod, pro} = this.props;
//     let placeholder = obj.placeholder + mod;
//     if(obj.checked) placeholder += pro;
//     return (
//       <div className='score'>
//         <input
//           onChange={::this._onChangeRadio}
//           checked={obj.checked}
//           type='checkbox'
//           ref={(el)=>(this.ck = el)}/>
//         <input
//           onChange={::this._onChange}
//           placeholder={placeholder}
//           value={obj.value || ''}
//           ref={(el)=>(this.in = el)}/>
//         <span className='title'>{name}</span>
//       </div>
//     )
//   }
// }

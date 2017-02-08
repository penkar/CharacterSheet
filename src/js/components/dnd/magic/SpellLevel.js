import React, {PropTypes, Component} from 'react'

export default class SpellLevel extends Component {
  static propTypes = {
    level: PropTypes.string,
    spells: PropTypes.array,
    stock: PropTypes.string,
  }

  render() {
    let {level} = this.props;
    return (
      <div className='spelllevel' key={level}>
        <div></div>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react';
import Sheet from './Sheet.js';

require('../../style/Base.scss')

export default class App extends Component {
  render() {
    return (
      <div>
        <Sheet />
      </div>
    )
  }
}

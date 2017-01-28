import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './js/containers/App'
import reducer from './js/reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
)

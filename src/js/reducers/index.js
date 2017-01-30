import { combineReducers } from 'redux'
import { createStore } from 'redux'

import characterNameReducer from './characterNameReducer'
import settingsReducer from './settingsReducer'
import abilityReducer from './abilityReducer'
import skillsReducer from './skillsReducer'

const rootReducer = combineReducers({
  characterNameReducer,
  settingsReducer,
  abilityReducer,
  skillsReducer,
});

export default rootReducer

import { combineReducers } from 'redux'
import { createStore } from 'redux'

import characterBioReducer from './characterBioReducer'
import characterNameReducer from './characterNameReducer'
import settingsReducer from './settingsReducer'
import abilityReducer from './abilityReducer'
import skillsReducer from './skillsReducer'

const rootReducer = combineReducers({
  characterBioReducer,
  characterNameReducer,
  settingsReducer,
  abilityReducer,
  skillsReducer,
});

export default rootReducer

import { combineReducers } from 'redux'
import { createStore } from 'redux'

import abilityReducer from './abilityReducer'
import attackDefenseReducer from './attackDefenseReducer'
import characterBioReducer from './characterBioReducer'
import characterNameReducer from './characterNameReducer'
import settingsReducer from './settingsReducer'
import skillsReducer from './skillsReducer'

const rootReducer = combineReducers({
  abilityReducer,
  attackDefenseReducer,
  characterBioReducer,
  characterNameReducer,
  settingsReducer,
  skillsReducer,
});

export default rootReducer

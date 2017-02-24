import { combineReducers } from 'redux'
import { createStore } from 'redux'

import abilityReducer from './abilityReducer'
import attackDefenseReducer from './attackDefenseReducer'
import characterBioReducer from './characterBioReducer'
import characterNameReducer from './characterNameReducer'
import settingsReducer from './settingsReducer'
import skillsReducer from './skillsReducer'
import magicReducer from './magicReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  userReducer,
  abilityReducer,
  attackDefenseReducer,
  characterBioReducer,
  characterNameReducer,
  settingsReducer,
  skillsReducer,
  magicReducer,
});

export default rootReducer

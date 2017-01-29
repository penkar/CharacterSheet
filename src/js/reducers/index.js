import { combineReducers } from 'redux'
import { createStore } from 'redux'

import characterNameReducer from './characterNameReducer'
import settingsReducer from './settingsReducer'
import abilityReducer from './abilityReducer'
import savingReducer from './savingReducer'
import skillsReducer from './skillsReducer'

const rootReducer = combineReducers({
  characterNameReducer,
  settingsReducer,
  abilityReducer,
  savingReducer,
  skillsReducer,
});

export default rootReducer

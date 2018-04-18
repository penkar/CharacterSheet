import { combineReducers } from 'redux';
import { createStore } from 'redux';

import abilityReducer from './abilityReducer';
import attackDefenseReducer from './attackDefenseReducer';
import characterBioReducer from './characterBioReducer';
import characterNameReducer from './characterNameReducer';
import featsReducer from './featsReducer';
import settingsReducer from './settingsReducer';
import skillsReducer from './skillsReducer';
import magicReducer from './magicReducer';

const rootReducer = combineReducers({
  abilityReducer,
  attackDefenseReducer,
  characterBioReducer,
  characterNameReducer,
  featsReducer,
  settingsReducer,
  skillsReducer,
  magicReducer,
});

export default rootReducer

import {HYDRATE, CLEAN, FEAT_CHANGE} from '../constants'

const featsReducer = (state=[], action) => {
  switch (action.type) {
    case FEAT_CHANGE:
      if(!state.includes(action.feat)) return [...state, action.feat];
      return [...state.filter((x) => (x !== action.feat))];
    case HYDRATE:
      return action.featsReducer || [];
    case CLEAN:
      return [];
    default:
      return state;
  }
}
export default featsReducer

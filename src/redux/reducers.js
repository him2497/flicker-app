import { combineReducers } from 'redux';

import reducers from './rootReducers'

export default function createReducer(asyncReducers) {
  return combineReducers({
    ...reducers,
    ...asyncReducers
  });
}

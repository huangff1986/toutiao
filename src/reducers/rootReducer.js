import { reducer as globalState } from './globalStateReducer';
import { reducer as tags } from './tagsReducer'
import { combineReducers } from 'redux';

export default combineReducers({
  globalState,
  tags
})
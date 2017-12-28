import {fork} from 'redux-saga/effects'
import {getAllTagsFlow} from './tagsSaga'
export default function* rootSaga() {
  yield fork(getAllTagsFlow);
}
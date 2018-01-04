import {put, take, call, select} from 'redux-saga/effects';
import {get, post} from '../fetch/fetch';
import {actionTypes as ManagerTagsTypes} from '../reducers/tagsReducer';
import {actionTypes as globalActionType} from '../reducers/globalStateReducer'

export function* getAllTags() {
  yield put({type: globalActionType.FETCH_START})
  try {
    return yield call(get, '/tag')
  } catch (err) {
    yield put({type: globalActionType.SET_MESSAGE, msgContent: '网络请求错误', msgType:0})
  } finally {
    yield put({type: globalActionType.FETCH_END})
  }
}

export function* getAllTagsFlow() {
  while(true) {
    // 当有GET_ALL_TAGS action 是 这个saga会拦截下来。
    yield take(ManagerTagsTypes.GET_ALL_TAGS);
    // 通过call执行 jieleruite 函数
    // res 就是getAllTags获取到的数据
    let res = yield call(getAllTags)
    if (res.code === 0) {
      let tempArr = [];
      for (let i =0; i < res.data.length; i++) {
        tempArr.push(res.data[i])
      }
      yield put({type: ManagerTagsTypes.SET_TAGS, data: tempArr});
    } else {
        yield put({type: globalActionType.SET_MESSAGE, msgContent: res.message, msgType: 1});
    }
  }
}


export function* addTag(title){
  yield put({type: globalActionType.FETCH_START});
  try {
    return yield call(post, '/addTag', {title})
  } catch (err) {
    yield put({type: globalActionType.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
  } finally {
    yield put({type: globalActionType.FETCH_END})
  }
}

export function* addTagFlow() {
  while(true) {
    let action = yield take(ManagerTagsTypes.ADD_TAG);
    let res = yield call(addTag, action.title);
    if (res.code === 0) {
    }
  }
}

export function* changeTagActive(title) {

}

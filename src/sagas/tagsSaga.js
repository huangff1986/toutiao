import {put, take, call, select} from 'redux-saga/effects';
import {get, post} from '../fetch/fetch';
import {actionTypes as ManagerTagsTypes} from '../reducers/tagsReducer';
import {actionTypes as globalActionType} from '../reducers/globalStateReducer'

export function* getAllTags() {
  yield put({type: globalActionType.FETCH_START})
  
    console.log('getAllTags err')
  try {
    return yield call(get, '/getAllTags')
    console.log('getAllTags err')
  } catch (err) {
    console.log('getAllTags err')
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
    console.log(res);
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
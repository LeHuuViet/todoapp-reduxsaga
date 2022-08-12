import { takeLatest, put, all, call } from "redux-saga/effects";
import { loadPostSuccess, loadPostFail } from "./app.action";
import { loadPostApi } from "./data";

export function* onLoadPostStartAsync() {
  try {
    const response = yield call(loadPostApi);
    yield put(loadPostSuccess(response.data));
  }
  catch (error) {
    yield put(loadPostFail(error));
  }
}

export function* onLoadPost() {
  yield takeLatest('LOAD_POST_START', onLoadPostStartAsync);
}
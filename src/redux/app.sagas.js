import { takeLatest, put, all, call } from "redux-saga/effects";
import { deleteTodoSaga, addTodoSaga } from "./app.action";

export function* onAddTodoSaga(payload) {
  yield put(addTodoSaga(payload));
}

export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id));
}

export function* onAdd() {
  yield takeLatest("ADD_TODO", onAddTodoSaga);
}

export function* onDelete() {
  yield takeLatest("DELETE_TODO", onDeleteTodoSaga);
}

export function* todos() {
  yield all([call(onDelete), call(onAdd)]);
}

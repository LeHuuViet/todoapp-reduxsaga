import { takeLatest, put, all, call, fork } from "redux-saga/effects";
import { loadTodoSuccess, loadTodoFail, loadTodoStart } from "./app.action";
import { addTodo, deleteTodo, loadTodoApi, updateTodo } from "../services/todo";

export function* onloadTodoStartAsync() {
  try {
    const response = yield call(loadTodoApi);
    yield put(loadTodoSuccess(response.data));
  } catch (error) {
    yield put(loadTodoFail(error));
  }
}

export function* onAddTodoSaga(payload) {
  yield call(addTodo, payload);
  yield put(loadTodoStart());
}

export function* onDeleteTodoSaga({ payload: { id } }) {
  yield call(deleteTodo, id);
  yield put(loadTodoStart());
}

export function* onUpdateTodoSaga({ payload }) {
  console.log(payload);
  yield call(updateTodo, payload.id, payload.name);
  yield put(loadTodoStart());
}

export function* onLoadTodo() {
  yield takeLatest("LOAD_TODO_START", onloadTodoStartAsync);
}

export function* onAdd() {
  yield takeLatest("ADD_TODO", onAddTodoSaga);
}

export function* onDelete() {
  yield takeLatest("DELETE_TODO", onDeleteTodoSaga);
}

export function* onUpdate() {
  yield takeLatest("UPDATE_TODO", onUpdateTodoSaga);
}

export default {
  onLoadTodo,
  onDelete,
  onAdd,
  onUpdate,
};

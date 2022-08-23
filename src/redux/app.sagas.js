import { takeLatest, put, all, call, fork } from "redux-saga/effects";
import { loadTodoSuccess, loadTodoFail, loadTodoStart, addTodoSaga } from "./app.action";
import { addTodo, deleteTodo, loadTodoApi, updateTodo } from "../services/todo";


// Side effects
export function* onloadTodoStartAsync({ payload }) {
  try {
    const response = yield call(loadTodoApi);
    yield put(loadTodoSuccess(response.data));
    payload.callback()
  } catch (error) {
    yield put(loadTodoFail(error));
    payload.callback()
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

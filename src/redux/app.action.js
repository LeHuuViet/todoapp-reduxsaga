export const loadTodoStart = (callback) => ({
  type: "LOAD_TODO_START",
  payload: { callback }
});

export const loadTodoSuccess = (todos) => ({
  type: "LOAD_TODO_SUCCESS",
  payload: todos,
});

export const loadTodoFail = (error) => ({
  type: "LOAD_TODO_FAIL",
  payload: error,
});

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  id: todo.id,
  name: todo.name,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const updateTodo = (id, name) => ({
  type: "UPDATE_TODO",
  payload: { id, name },
});

export const addTodoSaga = (todo) => ({
  type: "ADD_TODO_SAGA",
  payload: todo,
});

export const deleteTodoSaga = (todo) => ({
  type: "DELETE_TODO_SAGA",
  payload: todo,
});

export const updateTodoSaga = (todo) => ({
  type: "UPDATE_TODO_SAGA",
  payload: todo,
});

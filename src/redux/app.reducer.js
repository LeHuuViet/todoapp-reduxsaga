import todos from "./data";

const appReducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case "ADD_TODO_SAGA":
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case "DELETE_TODO_SAGA":
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    default:
      return state;
  }
};

export default appReducer;
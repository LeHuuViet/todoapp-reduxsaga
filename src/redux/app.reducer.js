const INITIAL_STATE = {
  todos: [],
  errors: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
  let newTodos;
  switch (action.type) {
    case "LOAD_TODO_START":
      return { ...state};
    case "LOAD_TODO_SUCCESS":
      return {
        ...state,
        todos: action.payload,
      };
    case "LOAD_TODO_FAIL":
      return {
        ...state,
        errors: action.payload,
      };
    case "ADD_TODO_SAGA":
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case "DELETE_TODO_SAGA":
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case "UPDATE_TODO_SAGA":
      const idx = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
        );
      // newTodos = [...state];
      // let index = -1;
      // for (let i = 0; i < newTodos.length; i++) {
      //   index++;
      //   if (newTodos[i].id === action.payload.id) {
      //     break;
      //   }
      // }
      // if (index !== -1) {
      //   newTodos[index] = action.payload;
      // }
      // return newTodos;
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, idx),
          { ...state.todos[idx], name: action.payload.name },
          ...state.todos.slice(idx + 1),
        ],
      };
    default:
      return state;
  }
};

export default appReducer;

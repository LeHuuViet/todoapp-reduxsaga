import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadTodoStart } from "../redux/app.action";
import TodoItem from "./TodoItem";

const FetchTodo = () => {
  const dispatch = useDispatch();
  const fetchTodo = () => {
    dispatch(loadTodoStart());
  };
  const state = useSelector((state) => ({ ...state.app }));
  return (
    <>
      <h1 style={{ textAlign: "left" }}>Todo App using ReduxSaga</h1>
      <div style={{ textAlign: "left" }}>
        {!state.loading &&
          state.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        <Button type="primary" onClick={() => fetchTodo()}>
          Fetch Todo
        </Button>
      </div>
    </>
  );
};

export default FetchTodo;

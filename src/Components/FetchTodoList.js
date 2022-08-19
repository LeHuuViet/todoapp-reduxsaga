import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodoStart } from "../redux/app.action";
import TodoItem from "./TodoItem";

const FetchTodo = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(loadTodoStart());
    }, 1000);
  }, [dispatch]);

  const state = useSelector((state) => state.app);
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <h1 style={{ textAlign: "left" }}>Todo App using ReduxSaga</h1>
      <div style={{ textAlign: "left" }}>
        {state.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};

export default FetchTodo;

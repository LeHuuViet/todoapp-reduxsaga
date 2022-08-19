import { Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodoStart } from "../redux/app.action";
import TodoItem from "./TodoItem";

const FetchTodo = () => {
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(false)
  const fetchTodo = () => {
    dispatch(loadTodoStart());
  };
  const state = useSelector((state) => state.app);
  if(loading) return <h1>Loading....</h1>
  return (
    <>
      <h1 style={{ textAlign: "left" }}>Todo App using ReduxSaga</h1>
      <div style={{ textAlign: "left" }}>
        {!state.loading &&
          state.todos.map((todo) => <TodoItem key={todo.id} todo={todo}  />)}
        <Button type="primary" onClick={fetchTodo}>
          Fetch Todo
        </Button>
      </div>
    </>
  );
};

export default FetchTodo;

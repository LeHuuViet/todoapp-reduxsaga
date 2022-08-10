import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteTodo } from "../redux/app.action";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>#{Math.trunc(todo.id * 10)}</div>
        <div>
          <h4>{todo.name}</h4>
        </div>
        <Button
          type="primary"
          onClick={() => dispatch(deleteTodo({ id: todo.id }))}
          danger
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default TodoItem;

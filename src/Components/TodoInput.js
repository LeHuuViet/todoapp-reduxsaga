import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addTodo } from "../redux/app.action";
import Button from "antd/lib/button";
import Input from "antd/lib/input";

const TodoInput = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const ref = useRef(null)

  const handleAddTodo = () => {
    ref.current.focus()
    dispatch(
      addTodo({
        id: Math.ceil(Math.random() * 1000000000),
        name,
      })
    );
    setName("");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          ref={ref}
        />
        <Button
          style={{ marginLeft: "20px" }}
          type="primary"
          onClick={handleAddTodo}
          size="medium"
        >
          Add
        </Button>
      </div>
    </>
  );
};

export default TodoInput;

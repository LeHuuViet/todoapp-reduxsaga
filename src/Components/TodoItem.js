import { useState } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/app.action";

const TodoItem = ({ todo, setLoading }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        {edit ? (
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{ minWidth: "400px" }}
          />
        ) : (
          <h4 key={todo.id} style={{ listStyle: "none" }}>
            {todo.name}
          </h4>
        )}

        <div>
          <Button
            type="primary"
            medium
            onClick={() => {
              if (edit) {
                dispatch(updateTodo(todo.id, name));
              }
              setEdit(!edit);
            }}
            style={{ marginRight: "10px" }}
          >
            {edit ? "Update" : "Edit"}
          </Button>
          <Button
            type="primary"
            onClick={() => dispatch(deleteTodo({ id: todo.id }))}
            danger
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;

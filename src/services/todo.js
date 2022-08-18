import axios from "axios";

export const loadTodoApi = async () =>
  await axios.get("http://localhost:3000/todo");

export const addTodo = async (data) =>
  await axios.post("http://localhost:3000/todo", data);

export const deleteTodo = async (id) =>
  await axios.delete(`http://localhost:3000/todo/${id}`);

export const updateTodo = async (id, name) =>
  await axios.patch(`http://localhost:3000/todo/${id}`, { name });

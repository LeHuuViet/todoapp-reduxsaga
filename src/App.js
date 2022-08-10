import './App.css';
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;

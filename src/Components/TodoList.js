import React from 'react';
import { useSelector } from 'react-redux';
import TodoItems from './TodoItems'

const TodoList = () => {
    let todos = useSelector(state => state.app);
    console.log('@@', todos)
    return (
        <div>
            {todos.map(todo => {
                return <TodoItems key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default TodoList;
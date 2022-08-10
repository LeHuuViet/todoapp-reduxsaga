import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addTodo } from "../redux/app.action";
import Button from "antd/lib/button";
import Input from "antd/lib/input";

const TodoInput = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: Math.random(),
            name,
        }))
        setName('')
    }
    return (
        <>
        <div>
            <Input 
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <Button type="primary" onClick={handleAddTodo} size="medium">
                Add
            </Button>
        </div>
        </>
    )
}

export default TodoInput
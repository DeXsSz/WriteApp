import React, {useEffect, useReducer} from 'react'
import TodoList from './components/TodoList'
import {todoReducer} from './components/todoReducer'
const init = () => {
    const initial = [{
            id: 123,
            task: 'WriteApp',
            done: false
    }]
    const local = JSON.parse(localStorage.getItem('todos'))
    if(local){
        return local
    }else{
        return initial
    }
};
const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])
    const handleAdd = (newTodo)=>{
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }
    const handleDelete = (todoId)=>{
        dispatch({
            type: 'delete',
            payload: todoId
        })
    }
    const handleToggle = (todoId)=>{
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }
    return (
        <div className="container">
            <TodoList handleAdd={handleAdd} todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/> 
        </div>
    )
}

export default TodoApp

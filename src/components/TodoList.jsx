import React from 'react'
import TodoAdd from './TodoAdd'
import './TodoList.css'
import TodoListItem from './TodoListItem'
const TodoList = ({handleAdd, todos, handleDelete, handleToggle}) => {
    return (
        <>
            {
                todos.map(todo=>{
                    return  <TodoListItem key={todo.id} {...todo} handleDelete={handleDelete} handleToggle={handleToggle}/>
                })
            }
            

            <TodoAdd handleAdd={handleAdd} />
        </>
    )
}

export default TodoList

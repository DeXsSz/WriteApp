import React from 'react';
import { useForm } from '../hooks/useForm';
import './TodoAdd.css';

const TodoAdd = ({handleAdd}) => {
    const [{ task }, handleInputChange, reset] = useForm({
        task: '',
    });
    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            task: task,
            done: false,
        };
        handleAdd(newTodo)
        reset();
    };
    return (
        <div className="write-task">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="write-task__input"
                    placeholder="Write a new task..."
                    name="task"
                    onChange={handleInputChange}
                    value={task}
                />
            </form>
        </div>
    );
};

export default TodoAdd;

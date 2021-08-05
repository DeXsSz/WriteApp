import React from 'react';
import './TodoListItem.css';
const TodoListItem = ({id, task, done, handleDelete, handleToggle}) => {

    return (
        <div className="list-item">
            {/* <input ref={check} type="checkbox" className="list-item__input--checkbox" /> */}
            <p className={`list-item__text ${done? 'complete': ''}`} onClick={()=>handleToggle(id)}>{task}</p>
            
            {/* <select name="selected" id="">
                <option value="undefined" defaultValue>
                    ----
                </option>
                <option value="work">Work</option>
                <option value="school">School</option>
                <option value="home">Home</option>
            </select> */}

            <button className="btn" onClick={()=>handleDelete(id)}>Eliminar</button>
        </div>
    );
};

export default TodoListItem;

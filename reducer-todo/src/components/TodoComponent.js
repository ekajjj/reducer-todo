import React from "react";

const Todo = (props) => {
    const { id, toggleComplete, item, completed } = props;
    return (
        <li onClick={() => toggleComplete(id)} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {item} (cuid: {id})

        </li>
    )
}

export default Todo;
import React from "react";

import Todo from "./TodoComponent";

function TodoList(props) {
    const { id, toggleComplete, item } = props;
    console.log("RIGHT HERE", props);

    return (
        <div>
            {props.todos.map(todo => (
                <Todo key={todo.id} {...todo} toggleComplete={toggleComplete} />
            ))}
<p onClick={() => toggleComplete(id)}>{item} </p>
        </div>
    )
};

export default TodoList;
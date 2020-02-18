import React from 'react';
import TodoList from "./components/TodoList";
import { reducer, initialState } from "./reducers/Reducers"; 
import TodoForm from "./components/TodoForm";

const App = () => {

  const localState = JSON.parse(localStorage.getItem("info"));

  const [item, dispatch] = React.useReducer(reducer, localState || initialState);
 
  React.useEffect(() => {
    localStorage.setItem("info", JSON.stringify(item));
  }, [item]);

  const addTodo = item => {
    dispatch({ type: "ADD_TODO", text: item}) 
  };

  const toggleComplete = id => {
    dispatch({ type: "TOGGLE_COMPLETE", id: id})
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED"})
  };

  return (
    <div className="App">
      <h1>React Todo List (using Reducers!)</h1>
      <TodoList addTodo={addTodo} 
        toggleComplete={toggleComplete}
        clearCompleted={clearCompleted}
        todos={item.todos}
      />   
      <TodoForm  addTodo={addTodo} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

function App() {
  
  const [todos, setTodos] = useState([]);

  
  function addTodo(item) {
    const currentTodos = [...todos, item];
    setTodos(currentTodos);
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos)
  }
  return (
    <>
      <Form addTodo={addTodo} />
      <List deleteTodo={deleteTodo} todos={todos}/>
      
    </>
  );
}

export default App;

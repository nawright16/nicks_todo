import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import List from "./List";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    if (!title) return;
    setTodos(todos => {
      return [...todos, { id: uuidv4(), title}];
    });
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  return (
    <>
      <Form addTodo={addTodo} />
      <List deleteTodo={deleteTodo} todos={todos}   />
    </>
  );
}

export default App;

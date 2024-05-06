import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import List from "./List";
//import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const oldTodos = localStorage.getItem("todos");
    if (oldTodos) {
      return JSON.parse(oldTodos);
    } else {
      return [];
    }
  });
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  
//This code updates local storage whenever a new task is entered

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    if (!title) return;
    setTodos((todos) => {
      return [...todos, { id: uuidv4(), title }];
    });
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleEdit(todo) {
    setEditId(todo.id);
    setEditText(todo.text);
  }

  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  function handleSave(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: editText };
      }
      return todo;
    });
    setTodos(newTodos);
    setEditId(null);
    setEditText("");
  }

  

  return (
    <>
      <Form addTodo={addTodo} />
      <List
        deleteTodo={deleteTodo}
        todos={todos}
        handleEdit={handleEdit}
        handleEditChange={handleEditChange}
        handleSave={handleSave}
        editId={editId}
        editText={editText}
       
      />
    </>
  );
}

export default App;

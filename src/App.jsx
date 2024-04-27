import { useState } from "react";
import Form from "./Form";
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
      <div className="list">
        <h1>Todos</h1>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              {item}
              <button onClick={() => deleteTodo(index)} className="dlt-btn">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

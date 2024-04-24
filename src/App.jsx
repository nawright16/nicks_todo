import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(item);
    setItem("");
    
  }

  function addTodo(item) {
    const currentTodos = [...todos, item ];
    setTodos(currentTodos)
    
  }
  return (
    <>
      <div className="form">
        <h1>Nick's Todo</h1>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="add-btn">add item</button>
        </form>
      </div>
      <div className="list">
        <h1>Todos</h1>
        <ul>
          {todos.map((item, index)=> ( <li key={index}>
            <input type="checkbox" />
            {item}
          </li>))}
         
        </ul>
      </div>
    </>
  );
}

export default App;

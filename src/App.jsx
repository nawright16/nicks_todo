import { useState, useEffect, useRef } from "react";
import { Reorder } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";

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

  const inputRef = useRef(null);

  useEffect(() => {
    if (editId && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editId])

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
    console.log(editText)
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
      <div className="list">
        <h1>Todos</h1>
        <ul className="items">
          <Reorder.Group values={todos} onReorder={setTodos}>
            {todos.map((todo) => {
              return (
                <Reorder.Item key={todo.id} value={todo}>
                  {editId === todo.id ? (
                    <input
                      ref={inputRef}
                      type="text"
                      value={editText}
                      placeholder={todo.title}
                      onChange={handleEditChange}
                    />
                  ) : (
                    <p>{todo.title}</p>
                  )}
                  {editId === todo.id ? (
                    <button onClick={() => handleSave(todo.id)}>Save</button>
                  ) : (
                    <div>
                      <button onClick={() => handleEdit(todo)}>
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="dlt-btn"
                      >
                        <span className="material-symbols-outlined">recommend</span>
                      </button>
                    </div>
                  )}
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </ul>
      </div>
    </>
  );
}

{
  /* <List
        deleteTodo={deleteTodo}
        todos={todos}
        handleEdit={handleEdit}
        handleEditChange={handleEditChange}
        handleSave={handleSave}
        editId={editId}
        editText={editText}
        onReorder={onReorder}
        
       
      /> */
}

export default App;

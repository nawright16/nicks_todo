import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState([]);

  return (
    <>
      <div className="form">
        <h1>Nick's Todo</h1>
        <form>
          <input type="text" />
          <button className="add-btn"></button>
        </form>
      </div>
      <div className="list">
        <h1>Todos</h1>
        <ul>
          <li>
            <input type="checkbox" />
            Item 1
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;

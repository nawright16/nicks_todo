import { useState } from "react";

function Form({ addTodo }) {
  const [item, setItem] = useState("");

  

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(item);
    setItem("");
  }

  function handleChange(e) {
    setItem(e.target.value);
  }

  return (
    <>
      <div className="form">
        <h1>Nick's Todo</h1>
        <form id="form" onSubmit={handleSubmit}>
          <input type="text" value={item} onChange={handleChange} />
          <button className="add-btn" type="submit">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;

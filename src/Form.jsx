import { useState } from "react";

function Form({ addTodo }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(item);
    setItem("");
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
    </>
  );
}

export default Form;

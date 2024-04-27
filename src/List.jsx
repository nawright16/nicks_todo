function List({deleteTodo, todos}) {
  return (
    <>
      <div className="list">
        <h1>Todos</h1>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              {item}
              <button onClick={() => deleteTodo(index)} className="dlt-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
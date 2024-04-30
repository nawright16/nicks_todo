function List({ deleteTodo, todos }) {
  return (
    <>
      <div className="list">
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" />
                <p>{todo.title}</p>
                <button onClick={() => deleteTodo(todo.id)} className="dlt-btn">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default List;

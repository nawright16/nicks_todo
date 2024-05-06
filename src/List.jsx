function List({
  deleteTodo,
  todos,
  handleEdit,
  handleEditChange,
  handleSave,
  editId,
  editText,
 
}) {

  
  return (
    <>
      <div className="list">
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" />
                {editId === todo.id ? (
                  <input
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
                      <span className="material-symbols-outlined">
                        delete_forever
                      </span>
                    </button>
                    
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default List;

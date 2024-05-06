import { Reorder } from "framer-motion";

function List({
  deleteTodo,
  todos,
  handleEdit,
  handleEditChange,
  handleSave,
  editId,
  editText,
  onReorder,
}) {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "todo",
  //   item: {id: todo.id},
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging()
  //   })
  // }))

  return (
    <>
      <div className="list">
        <h1>Todos</h1>
        <ul className="items">
          <Reorder.Group values={todos} onReorder={onReorder}>
            {todos.map((todo) => {
              return (
                <Reorder.Item key={todo.id} value={todo} >
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
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </ul>
      </div>
    </>
  );
}

export default List;

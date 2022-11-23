import React from "react";

function TodosList({ todos, setTodos, setEditTodo }) {
  const taskCompleteHandler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const taskEditHandler = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const deleteHandler = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <button
            className="button-complete task-button"
            onClick={() => taskCompleteHandler(todo)}
          >
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </button>
          <button
            className="button-edit task-button"
            onClick={() => taskEditHandler(todo)}
          >
            <ion-icon name="create-outline"></ion-icon>
          </button>
          <button
            className="button-delete task-button"
            onClick={() => deleteHandler(todo)}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </li>
      ))}
    </div>
  );
}

export default TodosList;

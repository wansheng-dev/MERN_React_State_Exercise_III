import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <input type="checkbox" onClick={() => completeTodo(index)} />
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
}

export default Todo;

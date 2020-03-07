import React, { useState } from "react";
import Todo from './Todo';
import TodoForm from './TodoForm'

function Wrapper() {
  const [todos, setTodos] = useState([
    {
      text: "Task #1",
      isCompleted: false
    },
    {
      text: "Blah blah blah",
      isCompleted: false
    },
    {
      text: "learn react",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default Wrapper;

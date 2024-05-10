import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const initialState = [];
  const [todos, setTodos] = useState(initialState);

  const addTask = (text) => {
    setTodos((todos) => [...todos, { id: uuid(), text }]);
  };

  const deleteTask = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const editTask = (id, newText) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  return (
    <>
      <NewTodoForm addTask={addTask} />
      <h2>Todo List</h2>

      {todos.map(({ id, text }) => (
        <Todo
          key={id}
          id={id}
          text={text}
          deleteTask={() => deleteTask(id)}
          editTask={editTask}
        />
      ))}
    </>
  );
};

export default TodoList;

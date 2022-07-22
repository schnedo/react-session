import Todo from "./todos/Todo";
import TodoList from "./todos/TodoList";
import { useState } from "react";

const initialTodos: Todo[] = [
  {
    id: 1,
    title: "Wichtige Dinge tun",
    completed: false,
  },
  {
    id: 2,
    title: "Lustige Dinge tun",
    completed: true,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleTodoCompletedClicked = (id: Todo["id"]) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
            ...todo,
            completed: !todo.completed,
          }
          : todo
      )
    );

  return (
    <TodoList
      todos={todos}
      onTodoCompletedClicked={handleTodoCompletedClicked}
    />
  );
}

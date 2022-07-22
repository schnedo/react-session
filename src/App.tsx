import Todo from "./todos/Todo";
import TodoList from "./todos/TodoList";

const todos: Todo[] = [
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
  return <TodoList todos={todos} />;
}

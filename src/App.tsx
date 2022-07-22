import Todo from "./todos/Todo";
import TodoItem from "./todos/TodoItem";

const todo: Todo = {
  id: 1,
  title: "Wichtige Dinge tun",
  completed: false,
};

export default function App() {
  return <TodoItem todo={todo} />;
}

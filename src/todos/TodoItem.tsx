import Todo from "./Todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div>
      <input type={"checkbox"} checked={todo.completed} />
      <span>{todo.title}</span>
    </div>
  );
}

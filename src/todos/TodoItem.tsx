import Todo from "./Todo";

interface TodoItemProps {
  todo: Todo;
  onCheckboxClick: () => unknown;
}

export default function TodoItem({ todo, onCheckboxClick }: TodoItemProps) {
  return (
    <div>
      <input
        type={"checkbox"}
        checked={todo.completed}
        onClick={onCheckboxClick}
      />
      <span>{todo.title}</span>
    </div>
  );
}

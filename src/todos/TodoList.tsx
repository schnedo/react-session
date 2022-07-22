import React from "react";
import Todo from "./Todo";
import TodoItem from "./TodoItem";
import BorderedBox from "../components/BorderedBox";

interface TodoListProps {
  todos: Todo[];
  onTodoCompletedClicked: (todoId: Todo["id"]) => unknown;
}

export default function TodoList({
  todos,
  onTodoCompletedClicked,
}: TodoListProps) {
  return (
    <div>
      <div>Todos</div>
      <BorderedBox>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheckboxClick={() => onTodoCompletedClicked(todo.id)}
          />
        ))}
      </BorderedBox>
    </div>
  );
}

import React from "react";
import Todo from "./Todo";
import TodoItem from "./TodoItem";
import BorderedBox from "../components/BorderedBox";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      <div>Todos</div>
      <BorderedBox>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </BorderedBox>
    </div>
  );
}

import React, { useState } from "react";
import { Checkbox, List, ListItem, ListItemText } from "@mui/material";

const initialTodos = [
  {
    id: 1,
    title: "Wichtige Dinge tun",
    completed: true,
  },
  {
    id: 2,
    title: "Lustige Dinge tun",
    completed: false,
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const handleChange = (index: number) => () => {
    const newTodos = [...todos];
    const changedTodo = newTodos[index];
    changedTodo.completed = !changedTodo.completed;
    setTodos(newTodos);
  };

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <Checkbox checked={todo.completed} onChange={handleChange(index)} />
          }
        >
          <ListItemText primary={todo.title} />
        </ListItem>
      ))}
    </List>
  );
}

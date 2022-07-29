import React from "react";
import { Checkbox, List, ListItem, ListItemText } from "@mui/material";

const todo = {
  id: 1,
  title: "Wichtige Dinge tun",
  completed: true,
};

export default function TodoList() {
  return (
    <List>
      <ListItem secondaryAction={<Checkbox checked={todo.completed} />}>
        <ListItemText primary={todo.title} />
      </ListItem>
    </List>
  );
}

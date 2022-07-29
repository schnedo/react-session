import { useEffect, useState } from "react";
import {
  Checkbox,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (response.ok) {
    return response.json();
  }
  throw Error("response not ok");
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    if (todos === undefined) {
      fetchTodos()
        .then(setTodos)
        .catch((e) => console.log(e));
    }
  }, [todos]);

  if (todos === undefined) {
    return <CircularProgress />;
  }

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

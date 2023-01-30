"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";
import Router from "next/router";
interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}
interface TodoProps {
  initialTodos: Todo[];
}
const todosList: Todo[] = [
  { id: 1, task: "Clean the house", isCompleted: false },
  { id: 2, task: "Buy groceries", isCompleted: true },
  { id: 3, task: "Wash the car", isCompleted: false },
];

const Todo: React.FC<TodoProps> = ({ initialTodos }) => {
  useEffect(() => {
    axios.get("api/auth/user-data");
  }, []);

  const [todos, setTodos] = useState(todosList);
  const handleAddTodo = (task: string) => {
    setTodos([...todos, { id: Date.now(), task, isCompleted: false }]);
  };
  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const logoutHandler = async () => {
    const response = await axios.delete("/api/auth/logout-user");
    if (response.status === 200) {
      Router.push("/auth/login");
    }
  };
  return (
    <Box>
      <Text fontSize={20} textAlign={"center"}>
        To-Do
      </Text>
      <Button type="button" onClick={logoutHandler}>
        Logout
      </Button>
      <Box>
        <Input type="text" placeholder="Add Todo" />
        <Button onClick={() => handleAddTodo("Add Todo")}>Add Todo</Button>
      </Box>
      <Text fontSize={20} textAlign={"center"}>
        My To-Do List
      </Text>
      <Box display={"flex"} justifyContent={"center"}>
        <UnorderedList>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <Text
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                {todo.task}
              </Text>
              <Button onClick={() => handleRemoveTodo(todo.id)}>Remove</Button>
              <Button onClick={() => handleToggleComplete(todo.id)}>
                {todo.isCompleted ? "Mark Incomplete" : "Mark Complete"}
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Todo;

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
  _id: string;
  task: string;
  isCompleted: boolean;
}
interface TodoProps {
  initialTodos: Todo[];
}
const todosList: Todo[] = [
  { _id: "1", task: "Clean the house", isCompleted: false },
  { _id: "2", task: "Buy groceries", isCompleted: true },
  { _id: "3", task: "Wash the car", isCompleted: false },
];
const Todo: React.FC<TodoProps> = ({ initialTodos }) => {
  const [userData, setUserData] = useState<any>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("api/auth/user-data").then((response) => {
      setUserData(response.data.user);
      axios
        .get("api/tasks/read-all-task", {
          params: {
            userId: response.data.user._id,
          },
        })
        .then((response) => {
          setTodos(response.data);
        });
    });
  }, []);

  const handleAddTodo = async (task: string) => {
    const response = await axios.post("api/tasks/add-task", {
      createdBy: userData._id,
      task,
      isCompleted: false,
    });
    if (response.status === 200) {
      console.log(response.data);

      setTodos([...todos, response.data]);
    }
  };
  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
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
        To-Dos of
        {" " + userData?.userName}
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
            <ListItem key={todo._id}>
              <Text
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                {todo.task + " " + todo._id}
              </Text>
              <Button onClick={() => handleRemoveTodo(todo._id)}>Remove</Button>
              <Button onClick={() => handleToggleComplete(todo._id)}>
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

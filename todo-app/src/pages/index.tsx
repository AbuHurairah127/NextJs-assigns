"use client";
import React, { useState, useEffect, ReactEventHandler } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";
import Router from "next/router";
import Navbar, { UserData } from "@/components/navbar/navbar";
interface Todo {
  _id: string;
  createdBy: string;
  task: string;
  isCompleted: boolean;
}
interface TodoProps {
  initialTodos: Todo[];
}

const Todo: React.FC<TodoProps> = ({ initialTodos }) => {
  const [todo, setTodo] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios.get("api/auth/user-data").then((response) => {
      setUserData(response.data.user);
      console.log(response.data.user);

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

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoader(true);
      if (!userData) return;
      const newTodo: {
        createdBy: string;
        task: string;
        isCompleted: boolean;
      } = {
        createdBy: userData._id,
        task: (e.target as HTMLInputElement).value,
        isCompleted: false,
      };
      const response = await axios.post("api/tasks/add-task", newTodo);
      if (response.status === 200) {
        setTodos([...todos, response.data]);
      }
    } catch (error: any) {
      alert(error.response.data);
    } finally {
      setLoader(false);
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
      <Navbar userData={userData} logoutHandler={logoutHandler} />
      <form onSubmit={(e) => handleAddTodo(e)}>
        <Heading textAlign={"center"} marginTop={5} color={"#023047"}>
          Add a new Todo
        </Heading>
        <Box
          display={"flex"}
          margin={8}
          padding={5}
          borderWidth={1}
          borderStyle={"solid"}
          borderColor={"#023047"}
          borderRadius={8}
        >
          <Input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add Todo"
          />
          <Button
            type="submit"
            colorScheme={"linkedin"}
            marginLeft={4}
            disabled={!loader}
          >
            {!loader ? "Add Todo" : "Adding A Todo"}
          </Button>
        </Box>
      </form>
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

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
import { MdDeleteForever, MdOutlineCheckCircle } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { AiFillEdit } from "react-icons/ai";
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
    <Box bgColor={"#f1faee"} minHeight={"100vh"}>
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
          borderColor={"#457b9d"}
          borderRadius={8}
        >
          <Input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Learn next js 13..."
            borderRightRadius={0}
          />
          <Button
            type="submit"
            bgColor={"#1d3557"}
            color={"white"}
            _hover={{
              bgColor: "#457b9d",
            }}
            disabled={!loader}
            borderLeftRadius={0}
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
            <ListItem
              key={todo._id}
              width={"90vw"}
              padding={2}
              marginY={1}
              borderRadius={10}
              borderColor={"#192F4D"}
              borderWidth={1}
            >
              <Text
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                {todo.task + " " + todo._id}
              </Text>
              <Button
                onClick={() => handleRemoveTodo(todo._id)}
                padding={0}
                bgColor={"#1d3557"}
                color={"white"}
                _hover={{
                  bgColor: "#457b9d",
                }}
              >
                <AiFillEdit size={20} />
              </Button>
              <Button
                onClick={() => handleRemoveTodo(todo._id)}
                padding={0}
                bgColor={"#e63946"}
                marginLeft={3}
                _hover={{ bgColor: "#e63946" }}
              >
                <MdDeleteForever size={20} />
              </Button>
              <Button
                onClick={() => handleToggleComplete(todo._id)}
                bgColor={"#457b9d"}
                _hover={{
                  bgColor: "#457b9d",
                }}
                marginLeft={3}
              >
                {todo.isCompleted ? (
                  <RxCrossCircled size={20} color={"white"} />
                ) : (
                  <MdOutlineCheckCircle size={20} color={"white"} />
                )}
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Todo;

import Head from "next/head";
import { Inter } from "@next/font/google";
import {
  Text,
  Box,
  Button,
  Input,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
export default function Home() {
  const [todos, setTodos] = useState([
    {
      title: "lorem1",
    },
    {
      title: "lorem1",
    },
    {
      title: "lorem1",
    },
    {
      title: "lorem1",
    },
  ]);
  const [todo, setTodo] = useState({ title: "" });
  const onChangeHandler = (e: any) => {
    setTodo({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        height={20}
        className="bg-red-500"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={5}
      >
        {/* Navbar */}
        <Box>
          <Text color={"gray.600"} fontSize="xl">
            Todos
          </Text>
        </Box>
        <Box>
          <Button colorScheme={"blackAlpha"}>Logout</Button>
        </Box>
      </Box>
      {/* Main */}
      <Box display={"flex"}>
        <Input
          type={"text"}
          placeholder="Add Todo"
          value={todo.title}
          name={"title"}
          onChange={onChangeHandler}
        ></Input>
        <Button>Add Todo</Button>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <UnorderedList>
          {todos.map((todo, i) => (
            <ListItem key={i}>{todo.title}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

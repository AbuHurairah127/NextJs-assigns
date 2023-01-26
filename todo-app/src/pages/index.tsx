import Head from "next/head";
import { Inter } from "@next/font/google";
import { Text, Box } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        bgColor="red"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box>Todos</Box>
        <Box>Avatar</Box>
      </Box>
    </>
  );
}

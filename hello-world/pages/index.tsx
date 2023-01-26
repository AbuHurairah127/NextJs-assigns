import Head from "next/head";
import {
  Flex,
  Heading,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const screenBgColor = useColorModeValue("black", "whiteAlpha.900");
  const textColor = useColorModeValue("whiteAlpha.900", "black");
  return (
    <>
      <Head>
        <title>Abu Hurairah</title>
      </Head>
      <Flex
        minHeight="100vh"
        background={screenBgColor}
        alignItems="center"
        justifyContent={"center"}
        flexDirection="column"
      >
        <Heading
          color={textColor}
          size={"4xl"}
          borderWidth="2px"
          borderColor={textColor}
          padding="10px 25px"
          borderRadius={"5px"}
          cursor="pointer"
          transitionDuration="1s"
          transitionTimingFunction="ease-out"
          transitionProperty="all"
          _hover={{
            borderRadius: "50px",
            padding: "10px 50px",
          }}
        >
          Hello World
        </Heading>
        <Button
          marginTop={"20px"}
          backgroundColor={textColor}
          onClick={toggleColorMode}
          _hover={{
            backgroundColor: textColor,
          }}
        >
          Click Me
        </Button>
      </Flex>
    </>
  );
}

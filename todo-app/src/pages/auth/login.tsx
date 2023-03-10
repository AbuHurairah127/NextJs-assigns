import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Alert,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios, { AxiosError } from "axios";

const Login: React.FC = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
    try {
      setLoading(true);
      const response = await axios.get("/api/auth/login", {
        params: { email: loginData.email, password: loginData.password },
      });
      if (response.status === 200) {
        return router.push("/");
      }
      alert(response.data);
    } catch (error: any) {
      alert(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.target) return;
    setLoginData({
      ...loginData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };
  return (
    <Box
      height={"100vh"}
      width="100vw"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      border="2px"
      borderStyle={"solid"}
      borderColor="blackAlpha.100"
      bgColor={"#f1faee"}
    >
      <Flex
        style={{
          width: "80vw",
          background: "white",
          border: "2px",
          borderStyle: "solid",
          borderColor: "blackAlpha.100",
          padding: 15,
          borderRadius: 8,
          flexDirection: "column",
          backgroundColor: "#f1faee",
        }}
      >
        <Heading textAlign={"center"}>Login</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="text"
              name="email"
              value={loginData.email}
              onChange={onChangeHandler}
              placeholder="ziakhan@panaverse.com"
              borderColor={"#1d3557"}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={onChangeHandler}
              placeholder="**********"
              borderColor={"#1d3557"}
            />
          </FormControl>
          <Button
            disabled={!loading}
            type="submit"
            bgColor={"#1d3557"}
            color={"white"}
            _hover={{ bgColor: "#1d3557" }}
            mt={4}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
          <Button
            type="button"
            color={"#1d3557"}
            bgColor={"white"}
            borderColor={"#1d3557"}
            borderWidth={1}
            mt={4}
            ml={4}
          >
            <Link href={"/auth/signup"}>Sign up</Link>
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default Login;

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
const SignUp: React.FC = () => {
  axios.defaults.withCredentials = true;
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoader(true);
      const response = await axios.post("/api/auth/register", formData);
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error: any) {
      alert(error.response.data);
    } finally {
      setLoader(false);
    }
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
        }}
      >
        <Heading textAlign={"center"}>SignUp</Heading>
        <form onSubmit={handleSubmit}>
          <Box display={"flex"}>
            <FormControl>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                width={"96%"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme={"linkedin"}
            mt={4}
            disabled={!loader}
          >
            {!loader ? "SignUp" : "Loading..."}
          </Button>
          <Button variant="outline" colorScheme={"linkedin"} mt={4} ml={4}>
            <Link href="/auth/login">Login</Link>
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default SignUp;

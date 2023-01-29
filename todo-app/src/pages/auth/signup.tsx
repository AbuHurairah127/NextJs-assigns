import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
const SignUp = () => {
  axios.defaults.withCredentials = true;
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // add your login logic here
    console.log(formData);
    const options = {
      method: "POST",
      url: "api/auth/register",
      body: formData,
    };
    try {
      const response = await axios.post("/api/auth/register", formData);
      if (response.status === 200) {
        document.cookie = `user-token =${response.data.authToken}`;
        console.log(document.cookie);

        router.push("/");
      }
    } catch (error) {
      console.log("Error in frontend", error);
      //
    }
    console.log("done with the api request");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
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
        <Button variant="teal" type="submit">
          SignUp
        </Button>
        <Button variant="teal" type="submit">
          <Link href="/auth/login">Login</Link>
        </Button>
      </Stack>
    </form>
  );
};

export default SignUp;

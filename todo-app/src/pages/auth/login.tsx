import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/auth/login", {
        params: { email: email, password: password },
      });
      if (response.status === 200) {
        router.push("/");
      }
      console.log("done with api");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="email">Username</FormLabel>
        <Input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button type="submit" variant="teal" mt={4}>
        Login
      </Button>
      <Button type="button" variant="teal" mt={4}>
        <Link href={"/auth/signup"}>Sign up</Link>
      </Button>
    </form>
  );
};

export default Login;

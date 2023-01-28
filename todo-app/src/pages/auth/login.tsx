import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
// import { useRouter } from "next/router";
import Link from "next/link";

// const router = useRouter();
interface LoginProps {
  onSubmit: (username: string, password: string) => void;
}
const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

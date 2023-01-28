import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import Link from "next/link";

function SignupForm() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter your first name"
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Enter your last name"
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
      </FormControl>

      <Button mt={4} variant="teal" type="submit">
        Sign up
      </Button>
      <Button mt={4} variant="teal" type="submit">
        <Link href="/auth/login">Login</Link>
      </Button>
    </form>
  );
}
export default SignupForm;

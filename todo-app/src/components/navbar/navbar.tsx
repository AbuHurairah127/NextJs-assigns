import React from "react";
import { Text, Button, Box } from "@chakra-ui/react";

export type UserData = {
  userName: string;
  createdAt: Date;
  firstName: string;
  lastName: string;
  updatedAt: Date;
  __v: number;
  _id: string;
};
type Props = {
  userData: UserData | null;
  logoutHandler: () => void;
};

const Navbar: React.FC<Props> = (props) => {
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      bgColor={"#023047"}
      height={16}
      alignItems={"center"}
    >
      <Text
        color={"#8ecae6"}
        marginLeft={4}
        fontStyle={"italic"}
        fontWeight={"bold"}
        fontSize={22}
      >
        Todo Application
      </Text>
      <Text fontSize={20} textAlign={"center"} textColor={"white"}>
        To-Dos of
        {" " + props.userData?.userName}
      </Text>
      <Button
        type="button"
        marginRight={4}
        colorScheme={"linkedin"}
        onClick={props.logoutHandler}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Navbar;

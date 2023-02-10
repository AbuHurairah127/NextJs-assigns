"use client";
import { Button } from "@chakra-ui/react";

type Props = { label: string };
const CustomButton = (props: Props) => {
  return (
    <Button
      borderRadius={100}
      paddingX="18px"
      paddingY={"8px"}
      bgGradient="linear(to-t, red.700, red.500)"
      color={"white"}
      shadow={"0px 0px 15px red"}
      _hover={{
        bgGradient: "linear(to-tr, red.700, red.500)",
      }}
    >
      {props.label}
    </Button>
  );
};

export default CustomButton;

// pages/_app.js
"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ChakraWrapper = ({ children }: Props) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraWrapper;

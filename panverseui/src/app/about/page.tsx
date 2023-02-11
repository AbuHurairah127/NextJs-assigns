"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import president from "./../../assets/president.jpg";
const page = () => {
  return (
    <main>
      <Box width={"250px"} marginX={"auto"} marginY={"12px"}>
        <Image
          src={president}
          alt={""}
          style={{
            height: 250,
            width: 250,
            borderRadius: "50%",
          }}
        ></Image>
      </Box>
      <Text textAlign={"center"}>
        Dr.Arif Alvi President of Islamic Republic of Pakistan
      </Text>
      <Box>
        <Heading textAlign={"center"}>
          Presidential Initiative for Artificial Intelligence & Computing
          (PIAIC)
        </Heading>
        <Heading
          size={"lg"}
          textAlign={"center"}
          marginY={"5px"}
          textColor={"red.500"}
        >
          Our Mission
        </Heading>
        <Box
          width={"75vw"}
          textAlign={"center"}
          marginX={"auto"}
          boxShadow={"2xl"}
          borderRadius={"5px"}
          marginY={"25px"}
        >
          <Text padding={"10px"}>
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </Text>
        </Box>

        <Box marginTop={"50px"}>
          <Heading textAlign={"center"}>More About Us</Heading>
          <Box display={"flex"}>
            <Box
              borderBottom={1}
              borderStyle={"solid"}
              width={"25vw"}
              marginX="auto"
              marginY={"15px"}
            ></Box>
            <Text>Our Complete Introduction</Text>
            <Box
              borderBottom={1}
              borderStyle={"solid"}
              width={"25vw"}
              marginX="auto"
              marginY={"15px"}
            ></Box>
          </Box>
          <Box width={"75vw"} marginX={"auto"} marginY={"50px"}>
            <iframe
              src="https://www.youtube.com/embed/sqtc7s1KZEg"
              style={{
                width: "75vw",
                aspectRatio: "16/9",
              }}
            ></iframe>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default page;

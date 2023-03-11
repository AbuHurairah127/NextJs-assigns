"use client";
import { Flex, Box, Heading, Text, Center } from "@chakra-ui/react";
import React from "react";

const page = () => {
  const firstThreeQauterData = [
    {
      quaterNo: "1",
      desc: "Object Oriented Programming with typescript",
    },
    {
      quaterNo: "2",
      desc: "Developing planet-scale, Serverless Cloud, Cloud Apps and APIs using Nextjs 13 and cloud development kit for Terraform",
    },
    {
      quaterNo: "3",
      desc: "Dollar making bootcamp (Full stack Template and APIs Product Development)",
    },
  ];
  return (
    <main>
      <Heading marginY={5} textAlign={"center"}>
        Program Structure
      </Heading>
      <Text textAlign={"center"} width={"75vw"} marginX="auto">
        A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting
        Ready for the Next Generation of the Internet Consolidating Web 3.0,
        Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient
        Computing/IoT Technologies
      </Text>
      <Heading marginTop={5} textAlign={"center"} size={"lg"}>
        Core Courses (Common in All Specializations)
      </Heading>
      <Text paddingLeft={3}>
        Every participant of the program will start by completing the following
        three core courses:
      </Text>
      <Flex justifyContent={"space-around"} marginTop={5} flexWrap={"wrap"}>
        {firstThreeQauterData.map((quter, i) => {
          return (
            <Box
              key={i}
              width={"300px"}
              height={"300px"}
              borderRadius={10}
              boxShadow={"2xl"}
              padding={7}
            >
              {" "}
              <Heading textAlign={"center"} width={"100%"}>
                Quater {quter.quaterNo}
              </Heading>
              <Text marginTop={16} textAlign={"center"} width={"100%"}>
                {quter.desc}
              </Text>
            </Box>
          );
        })}
      </Flex>
      <Heading textAlign={"center"} marginBottom={5} marginTop={10}>
        Specialized Tracks
      </Heading>
      <Text textAlign={"center"}>
        After completing the first two quarters the participants will select one
        or more specializations consisting of two courses each:
      </Text>
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        width={"25vw"}
        marginX="auto"
        marginY={8}
      ></Box>
      <Heading size={"lg"} textAlign={"center"}>
        Web 3.0 (Blockchain) and Metaverse Specialization
      </Heading>
      <Text marginX={5}>
        This Web 3.0 and Metaverse specialization focuses on developing
        full-stack Web 3.0 and Metaverse experiences for the next generation of
        the internet by specializing in building worlds that merge the best of
        cutting-edge decentralized distributed blockchains with 3D metaverse
        client experiences.
      </Text>
      <Flex justifyContent={"space-around"} marginY={10}>
        <Box
          width={{ base: "90vw", lg: "45vw" }}
          height={"200px"}
          boxShadow={"2xl"}
          borderRadius={8}
          padding={7}
        >
          <Heading width={"100%"} textAlign={"center"}>
            Quater 4
          </Heading>
          <Text marginTop={10} textAlign={"center"} width={"100%"}>
            Developing Smart Contracts and Planet scale Dapps
          </Text>
        </Box>
        <Box
          width={{ base: "90vw", lg: "45vw" }}
          height={"200px"}
          boxShadow={"2xl"}
          borderRadius={8}
          padding={7}
        >
          <Heading width={"100%"} textAlign={"center"}>
            Quater 5
          </Heading>
          <Text marginTop={10} textAlign={"center"} width={"100%"}>
            Developing Planet Scale Open Virtual and Augmented Metaverse
            Experiences
          </Text>
        </Box>
      </Flex>
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        width={"25vw"}
        marginX="auto"
        marginY={8}
      ></Box>
      <Heading size={"lg"} textAlign={"center"}>
        Artificial Intelligence (AI) and Deep Learning Specialization
      </Heading>
      <Text marginX={5}>
        The AI and Deep Learning specialization focuses on building and
        deploying intelligent APIs using OpenAI models and building custom Deep
        Learning Tensorflow models.
      </Text>
      <Flex justifyContent={"space-around"} marginY={10}>
        <Box
          width={{ base: "90vw", lg: "45vw" }}
          height={"200px"}
          boxShadow={"2xl"}
          borderRadius={8}
          padding={7}
        >
          <Heading width={"100%"} textAlign={"center"}>
            Quater 4
          </Heading>
          <Text marginTop={10} textAlign={"center"} width={"100%"}>
            Developing Planet scale Intelligent APIs and Python Programming
          </Text>
        </Box>
        <Box
          width={{ base: "90vw", lg: "45vw" }}
          height={"200px"}
          boxShadow={"2xl"}
          borderRadius={8}
          padding={7}
        >
          <Heading width={"100%"} textAlign={"center"}>
            Quater 5
          </Heading>
          <Text marginTop={10} textAlign={"center"} width={"100%"}>
            Deep Learning and MLOps
          </Text>
        </Box>
      </Flex>
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        width={"25vw"}
        marginX="auto"
        marginY={8}
      ></Box>
      <Heading size={"lg"} textAlign={"center"}>
        Cloud-Native Computing Specialization
      </Heading>
      <Text marginX={5}>
        The Cloud-Native Computing Specialization focuses on Containers,
        Kubernetes, and CDK for Kubernetes
      </Text>
      <Flex justifyContent={"space-around"} marginY={10}>
        <Box
          width={{ base: "90vw", lg: "45vw" }}
          height={"200px"}
          boxShadow={"2xl"}
          borderRadius={8}
          padding={7}
        >
          <Heading width={"100%"} textAlign={"center"}>
            Quater 4
          </Heading>
          <Text marginTop={10} textAlign={"center"} width={"100%"}>
            Certified Kubernetes Application Developer
          </Text>
        </Box>
        <Box
          width={{ base: "90vw", lg: "45vw" }}
          height={"200px"}
          boxShadow={"2xl"}
          borderRadius={8}
          padding={7}
        >
          <Heading width={"100%"} textAlign={"center"}>
            Quater 5
          </Heading>
          <Text marginTop={10} textAlign={"center"} width={"100%"}>
            Developing Multi cloud APIs using CDK for Terraform
          </Text>
        </Box>
      </Flex>
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        width={"25vw"}
        marginX="auto"
        marginY={8}
      ></Box>
      <Heading size={"lg"} textAlign={"center"}>
        Ambient Computing and IoT Specialization
      </Heading>
      <Text marginX={5}>
        The Ambient Computing and IoT Specialization focuses on building Smart
        Homes, Offices, Factories, and Cities using Voice computing, Matter, and
        Embedded Devices.
      </Text>
      <Flex justifyContent={"space-around"} marginY={10}>
        <Box
          width={{ base: "90vw", lg: "45vw" }}
          height={"200px"}
          boxShadow={"2xl"}
          borderRadius={8}
          padding={7}
        >
          <Heading width={"100%"} textAlign={"center"}>
            Quater 4
          </Heading>
          <Text marginTop={10} textAlign={"center"} width={"100%"}>
            Ambient Computing with voice Assistants and matter devices
          </Text>
        </Box>
        <Box
          width={{ base: "90vw", lg: "45vw" }}
          height={"200px"}
          boxShadow={"2xl"}
          borderRadius={8}
          padding={7}
        >
          <Heading width={"100%"} textAlign={"center"}>
            Quater 5
          </Heading>
          <Text marginTop={10} textAlign={"center"} width={"100%"}>
            Embeded programming using C and Rust
          </Text>
        </Box>
      </Flex>
      <Heading paddingX={7} paddingTop={7}>
        The Outcome for Participants of the Program
      </Heading>
      <Text paddingY={10} paddingX={7}>
        The graduates of this program will own products (Full-Stack App
        Templates, AR and VR Experiences, and APIs) that are marketed globally
        by the Panaverse DAO and, if they like, will also be able to start off
        by offering services at a rate of $50 per hour ($96,000 per year). This
        would give Pakistani professionals and students a fantastic opportunity
        to better their financial situation while also giving the economy a
        much-needed boost by expanding software exports.
      </Text>
    </main>
  );
};

export default page;

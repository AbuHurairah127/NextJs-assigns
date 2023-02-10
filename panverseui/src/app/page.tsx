"use client";
import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import coding from "./../assets/97639-coding.json";
import Hero from "@/views/hero/Hero";
import ScrollTrigger from "react-scroll-trigger";
import InfoCard from "@/components/infoCard/InfoCard";
import teacher from "./../assets/teachers.png";
import student from "./../assets/students.png";
import currentClass from "./../assets/classrooms.png";
import course from "./../assets/courses.png";
export default function Home() {
  const [counterOn, setCounterOn] = useState<Boolean>(false);
  return (
    <main>
      <Hero />
      {/* Hero Section */}
      <Flex
        height={{ lg: "90vh" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          width={["100vw", "100vw", "50vw", "50vw"]}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDirection={"column"}
          marginY={35}
        >
          <Heading marginX={{ base: 10 }} marginY={{ base: 4 }}>
            Start Your Developer Journey in the Web 3.0 and Virtual Universe
            Arena.
          </Heading>
          <Text marginX={{ base: 10 }} marginY={{ base: 4 }} fontSize={18}>
            Certified Web 3.0 and Metaverse Developer. A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet. Explore the new generation of internet
            with{" "}
            <Text
              as={"span"}
              display={"inline"}
              fontWeight={500}
              textColor={"red.500"}
            >
              Panaverse.
            </Text>
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          width={["100vw", "100vw", "50vw", "50vw"]}
          paddingX={10}
        >
          <Lottie animationData={coding} loop={true} />
        </Box>
      </Flex>
      <Box bgColor={"gray.100"} padding={10}>
        <Heading textAlign={"center"}>We Are Proud To Tell You</Heading>
        <Text textAlign={"center"} paddingX={"10vw"}>
          Our community, teachers, and students are all essential components of
          this dynamic and thriving network, working together to create a
          brighter future.
        </Text>
        <Box>
          <Box>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              {counterOn && (
                <Box display={"flex"} justifyContent={"space-between"}>
                  <InfoCard
                    headingText="Currently Enrolled Students"
                    ImageSrc={teacher}
                    count={30}
                    countDuration={2}
                    bgColor={"blue.400"}
                  />
                  <InfoCard
                    headingText="Currently Enrolled Students"
                    ImageSrc={student}
                    count={3500}
                    countDuration={5}
                    bgColor={"blue.400"}
                  />
                  <InfoCard
                    headingText="Currently Enrolled Students"
                    ImageSrc={currentClass}
                    count={7}
                    countDuration={0.5}
                    bgColor={"blue.400"}
                  />
                  <InfoCard
                    headingText="Currently Enrolled Students"
                    ImageSrc={course}
                    count={6}
                    countDuration={0.5}
                    bgColor={"blue.400"}
                  />
                </Box>
              )}
            </ScrollTrigger>
          </Box>
        </Box>
      </Box>
    </main>
  );
}

"use client";
import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import coding from "./../assets/97639-coding.json";
import Hero from "@/views/hero/Hero";
import InfoCard from "@/components/infoCard/InfoCard";
import teacher from "./../assets/teachers.png";
import student from "./../assets/students.png";
import currentClass from "./../assets/classrooms.png";
import course from "./../assets/courses.png";
import FaculityCard from "@/components/facultyCard/FaculityCard";
import ziaKhan from "./../assets/ziaKhan.png";
import daniyalNaghori from "./../assets/Daniyal-Naghori.png";

export default function Home() {
  const facultyMembers = [
    {
      name: "Zia Khan",
      Desc: "Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist | CEO Panacloud | Volunteer COO Presidential Initiative for AI and Computing",
      Img: ziaKhan,
    },
    {
      name: "Daniyal Naghori",
      Desc: "CEO at PIAIC, CTO at TravelclubIQ and Founder, Director, CEO at ProStack Ltd",
      Img: daniyalNaghori,
    },
  ];
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
          flexDirection="column"
          marginBottom={10}
        >
          <Lottie animationData={coding} loop={true} />
          <Box
            width={220}
            alignSelf={{ lg: "flex-start" }}
            boxShadow={"2xl"}
            padding={3}
            borderRadius={8}
          >
            <Text>
              {" "}
              Join a 13 Trillion Dollar Industry with 5 Billion Users
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box bgColor={"gray.100"} paddingX={5} paddingY={10}>
        <Heading textAlign={"center"}>We Are Proud To Tell You</Heading>
        <Text textAlign={"center"} paddingX={"10vw"}>
          Our community, teachers, and students are all essential components of
          this dynamic and thriving network, working together to create a
          brighter future.
        </Text>
        <Box>
          <Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              marginBottom={35}
              marginTop={55}
            >
              <InfoCard
                headingText="Our Skilled Teachers"
                ImageSrc={teacher}
                count={30}
                countDuration={2}
                bgColor={"#2E6AF0"}
              />
              <InfoCard
                headingText="Currently Enrolled Students"
                ImageSrc={student}
                count={3500}
                countDuration={5}
                bgColor={"#DD256F"}
              />
              <InfoCard
                headingText="Currently Enrolled Classes"
                ImageSrc={currentClass}
                count={7}
                countDuration={0.5}
                bgColor={"#8008E6"}
              />
              <InfoCard
                headingText="Currently Available Courses"
                ImageSrc={course}
                count={6}
                countDuration={0.5}
                bgColor={"#0DAE75"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Main Faculty */}
      <Box paddingY={25}>
        <Heading textAlign={"center"}>The Program in a Nutshell</Heading>
        <Heading
          textAlign={"center"}
          color={"red.400"}
          size={"lg"}
          fontWeight={"300"}
          marginTop={3}
        >
          Earn While You Learn
        </Heading>
        <Text
          border={2}
          width={"75vw"}
          marginX="auto"
          marginY={"30px"}
          fontSize={18}
          padding={5}
          borderRadius={10}
          boxShadow="lg"
        >
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program’s beginning. It resembles a cross
          between a corporate venture and an educational project.
        </Text>
        <Box
          borderBottom={1}
          borderStyle={"solid"}
          width={"25vw"}
          marginX="auto"
        ></Box>
        <Heading textAlign={"center"} marginTop={"10px"}>
          Our Motive and Goals
        </Heading>
        <Text textAlign={"center"} marginX={8} marginTop={2}>
          "The Only Way Pakistan Can Get Out of the Current Financial
          Difficulties is By Increasing Software Exports" <br />
          ""Empowering our nation's IT industry to export $1 billion and
          beyond.""
        </Text>
        <Text
          border={2}
          width={"75vw"}
          marginX="auto"
          marginY={"30px"}
          fontSize={18}
          padding={5}
          borderRadius={10}
          boxShadow="2xl"
        >
          Pakistan Export Projection Through Software Services: <br />
          &emsp;&emsp;If a developer earns $30 per hour, for 40 hours a week
          he/she will make: $30 x 40 Hrs/Wk x 52 Wks = $62,400/Year <br /> How
          many developers required to increase exports by $1 Billion Dollars:
          $1,000,000,000 Annual Exports / $62,400 Year Export Per Developer =
          16,000 Developers Can Generate $1 Billion Exports Our Dollar Deficit
          is $20 Billion we need 16,000 x 20 = 360,000 Services Developers Need
          to be Trained to Fill the Dollar Gap through Software Services Exports
        </Text>
        <Text
          border={2}
          width={"75vw"}
          marginX="auto"
          marginY={"40px"}
          fontSize={18}
          padding={5}
          borderRadius={10}
          boxShadow="2xl"
        >
          Projections For Pakistan Exports Through Software Micro
          Products/Components (Full Stack Web 3 Templates + 3D Metaverse
          Templates, Models, and Avatars + Serverless APIs): If a developer can
          create one Micro Products/Components in 3 months it means 4 Per Year.
          In 3 Years each developer will be selling 12 items. In each micro
          product/component is sold one per day it means he/she is selling: 12
          micro products x 1 per day x 365 days = 4,380 micro products sold per
          year per developer If each product is sold for $50 dollars it means a
          revenue of: 4,380 Micro Products x $50 Selling Price = $219,000 per
          year per developer (after three years) $1,000,000,000 Annual Exports /
          $219,000 Per Year Export Per Developer = 4,600 Micro Product
          Developers Can Generate $1 Billion Exports Our Dollar Deficit is $20
          Billion we need 4,600 x 20 = 91,000 Micro Product Developers Need to
          be Trained to Fill the Dollar Gap through Software Micro Product
          Exports
        </Text>
      </Box>
    </main>
  );
}

"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import coding from "./../assets/97639-coding.json";
import Hero from "@/views/hero/Hero";
import InfoCard from "@/components/infoCard/InfoCard";
import teacher from "./../assets/teachers.png";
import student from "./../assets/students.png";
import currentClass from "./../assets/classrooms.png";
import course from "./../assets/courses.png";
import { motion, isValidMotionProp, useScroll } from "framer-motion";
import Link from "next/link";
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <main>
      <Box overflowX={"hidden"}>
        <Hero />
        {/* Hero Section */}
        <Flex
          height={{ lg: "90vh" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            as={motion.div}
            width={["100vw", "100vw", "50vw", "50vw"]}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
            marginY={35}
            initial={{ translateX: "-100vw" }}
            animate={{ translateX: 0 }}
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
            as={motion.div}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            width={["100vw", "100vw", "50vw", "50vw"]}
            paddingX={10}
            flexDirection="column"
            marginBottom={10}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
          >
            <Lottie animationData={coding} loop={true} />
            <Box
              as={motion.div}
              width={220}
              alignSelf={{ lg: "flex-start" }}
              boxShadow={"2xl"}
              padding={3}
              borderRadius={8}
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
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
            Our community, teachers, and students are all essential components
            of this dynamic and thriving network, working together to create a
            brighter future.
          </Text>
          <Box>
            <Box>
              <Box
                as={motion.div}
                display={"flex"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                marginBottom={35}
                marginTop={55}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
              >
                <InfoCard
                  headingText="Our Skilled Teachers"
                  ImageSrc={teacher}
                  count={30}
                  bgColor={"#2E6AF0"}
                />
                <InfoCard
                  headingText="Currently Enrolled Students"
                  ImageSrc={student}
                  count={3500}
                  bgColor={"#DD256F"}
                />
                <InfoCard
                  headingText="Currently Enrolled Classes"
                  ImageSrc={currentClass}
                  count={7}
                  bgColor={"#8008E6"}
                />
                <InfoCard
                  headingText="Currently Available Courses"
                  ImageSrc={course}
                  count={6}
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
            as={motion.h2}
            textAlign={"center"}
            color={"red.400"}
            size={"lg"}
            fontWeight={"300"}
            marginTop={3}
            whileInView={{ scale: 1.3 }}
            transitionDuration={"1"}
          >
            Earn While You Learn
          </Heading>
          <Text
            as={motion.p}
            border={2}
            width={"75vw"}
            marginX="auto"
            marginY={"30px"}
            fontSize={18}
            padding={5}
            borderRadius={10}
            boxShadow="lg"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program’s beginning. It resembles a
            cross between a corporate venture and an educational project.
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
            as={motion.p}
            border={2}
            width={"75vw"}
            marginX="auto"
            marginY={"30px"}
            fontSize={18}
            padding={5}
            borderRadius={10}
            boxShadow="2xl"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            The Battle of Pakistan Begins <br /> We are not rats but warriors we
            will not leave a sinking ship but fight till the last breadth. Those
            with us stand firm our time has arrived and those who are afraid and
            weak step out of the way. The plan has three phases/stages: <br />{" "}
            Phase 1: In phase one we will cover the&nbsp;
            <Link
              href={"https://rb.gy/vmrgvy"}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Syllabus
            </Link>{" "}
            <br />
            <br />
            Phase 2: We will rebuild the Pakistan Economy using Web 3
            technologies. A detailed plan has been developed and will be
            disclosed when we have completed phase 1. <br /> <br /> Phase 3: A
            plan is in place but we will operate on this in stealth mode till
            D-Day
          </Text>
          <Box width={"75vw"} margin={"auto"}>
            <motion.iframe
              src="https://www.youtube.com/embed/PwLzOxLe4zc"
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "16/9",
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
            ></motion.iframe>
          </Box>
        </Box>
      </Box>
    </main>
  );
}

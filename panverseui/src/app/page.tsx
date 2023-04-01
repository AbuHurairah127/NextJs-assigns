"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
  useMediaQuery,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import coding from "./../assets/97639-coding.json";
import earn from "./../assets/earn-while-you-learn.json";
import Hero from "@/views/hero/Hero";
import InfoCard from "@/components/infoCard/InfoCard";
import teacher from "./../assets/teachers.png";
import student from "./../assets/students.png";
import currentClass from "./../assets/classrooms.png";
import course from "./../assets/courses.png";
import { motion, isValidMotionProp, useScroll } from "framer-motion";
import Link from "next/link";
import economy from "./../assets/economy.json";
import { StaticImageData } from "next/image";
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
export type InfoTypes = {
  heading: string;
  image: StaticImageData;
  count: number;
  bg: string;
};

export default function Home() {
  const [isLargerThanLg] = useMediaQuery("(min-width: 1024px)");
  const INFO_CARD_DATA: {
    heading: string;
    image: StaticImageData;
    count: number;
    bg: string;
  }[] = [
    {
      heading: "Our Skilled Teachers",
      image: teacher,
      count: 30,
      bg: "#2E6AF0",
    },
    {
      heading: "Currently Enrolled Students",
      image: student,
      count: 3500,
      bg: "#DD256F",
    },
    {
      heading: "Current classes",
      image: currentClass,
      count: 14,
      bg: "#8008E6",
    },
    {
      heading: "Currently Available Courses",
      image: course,
      count: 6,
      bg: "#0DAE75",
    },
  ];
  const animation = {
    y: [50, 0, 50], // An array of values for y property to bounce between
    transition: {
      duration: 0.8, // Total duration of the animation
      ease: "easeInOut", // Easing function for the animation
      times: [0, 1.5, 3], // Specifies the time percentage of each value in the array
      repeat: Infinity, // Specifies the number of times the animation should repeat
      repeatType: "reverse", // Specifies the type of repeat animation
    },
  };
  return (
    <main>
      <Box overflowX={"hidden"}>
        <Hero />
        {/* Hero Section */}
        <Flex
          height={{ lg: "90vh" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <ChakraBox
            width={["100vw", "100vw", "50vw", "50vw"]}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
            marginY={35}
            initial={{ translateX: "-50vw", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ duration: 2 }}
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
          </ChakraBox>
          <ChakraBox
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
            <ChakraBox
              as={motion.div}
              width={220}
              alignSelf={{ lg: "flex-start" }}
              boxShadow={"2xl"}
              padding={3}
              borderRadius={8}
              //@ts-ignore
              animate={animation}
            >
              <Text>
                Join a 13 Trillion Dollar Industry with 5 Billion Users
              </Text>
            </ChakraBox>
          </ChakraBox>
        </Flex>
        <ChakraBox bgColor={"gray.100"} paddingX={5} paddingY={10}>
          <ChakraBox
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            // @ts-ignore
            transition={{ duration: 1.3 }}
          >
            <Heading textAlign={"center"}>We Are Proud To Tell You</Heading>
            <Text textAlign={"center"} paddingX={"10vw"}>
              Our community, teachers, and students are all essential components
              of this dynamic and thriving network, working together to create a
              brighter future.
            </Text>
          </ChakraBox>
          <ChakraBox>
            <ChakraBox>
              <ChakraBox
                display={"flex"}
                justifyContent={[
                  "center",
                  "center",
                  "space-between",
                  "space-between",
                ]}
                flexWrap={"wrap"}
                marginBottom={35}
                marginTop={55}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                //@ts-ignore
                transition={{ duration: 1.3 }}
              >
                {INFO_CARD_DATA.map((info, i) => (
                  <InfoCard
                    key={i}
                    heading={info.heading}
                    image={info.image}
                    count={info.count}
                    bg={info.bg}
                  />
                ))}
              </ChakraBox>
            </ChakraBox>
          </ChakraBox>
        </ChakraBox>
        {/* Main Faculty */}
        <Box paddingY={25}>
          <Heading textAlign={"center"}>Brief Summary of Program</Heading>

          <ChakraBox
            display={"flex"}
            justifyContent={{ md: "space-evenly" }}
            alignItems={{ md: "center" }}
            marginY={8}
            flexDirection={["column", "column", "row", "row"]}
          >
            <ChakraBox
              width={{ xs: "100vw", lg: "50vw" }}
              initial={
                isLargerThanLg && { rotate: 0, translate: "-50%", opacity: 0 }
              }
              // @ts-ignore
              whileInView={
                isLargerThanLg && {
                  opacity: [0.3, 0.85, 1],
                  translate: ["-50%", "-0.1%", 0],
                  rotate: [-360, 10, 0],
                }
              }
              //@ts-ignore
              transition={
                isLargerThanLg && {
                  duration: 1.3,
                  ease: "easeInOut",
                  times: [0, 0.9, 1],
                  bounceStiffness: 500,
                  bounceDamping: 20,
                }
              }
            >
              <Lottie animationData={earn} loop={true} />
            </ChakraBox>
            <ChakraBox
              width={{ xs: "100vw", lg: "50vw" }}
              paddingX={5}
              initial={isLargerThanLg && { translate: "-50%" }}
              // @ts-ignore
              whileInView={
                isLargerThanLg && { translate: ["-50%", "-0.1%", 0] }
              }
              //@ts-ignore
              transition={
                isLargerThanLg && {
                  duration: 1.3,
                  ease: "easeInOut",
                  times: [0, 0.9, 1],
                  bounceStiffness: 500,
                  bounceDamping: 20,
                }
              }
            >
              <Heading
                as={motion.h2}
                textAlign={"center"}
                color={"red.400"}
                size={"lg"}
                fontWeight={"bold"}
                marginTop={3}
              >
                Earn While You Learn
              </Heading>
              <Text
                as={motion.p}
                border={2}
                fontSize={19}
                textAlign={"center"}
                marginX={25}
                marginTop={5}
              >
                Students in this brand-new type of curriculum will learn how to
                make money and increase exports in the classroom and will be
                able to do so within six months of the program&apos;s start. It
                resembles a hybrid of a business venture and an educational
                project. With a unique blend of business and educational
                elements. Students will begin applying these skills within six
                months of the program&apos;s start
              </Text>
            </ChakraBox>
          </ChakraBox>
          <ChakraBox
            borderBottom={1}
            borderStyle={"solid"}
            width={"50vw"}
            marginX="auto"
          ></ChakraBox>
          <ChakraBox bgColor={"gray.100"} padding={5}>
            <Heading textAlign={"center"} marginTop={"10px"}>
              Our Motive and&nbsp;
              <Heading as={"span"} color={"red.600"}>
                Goals
              </Heading>
            </Heading>
            <Text textAlign={"center"} marginX={8} marginTop={2}>
              &quot;The Only Way Pakistan Can Get Out of the Current Financial
              Difficulties is By Increasing Software Exports&quot; <br />
              &quot;Empowering our nation&apos;s IT industry to export $1
              billion and beyond.&quot;
            </Text>

            <ChakraBox
              display={"flex"}
              alignItems={"center"}
              flexDirection={["column", "column", "row", "row"]}
            >
              <Text
                as={motion.p}
                border={2}
                width={{ xs: "100vw", lg: "50vw" }}
                marginX="auto"
                marginY={"30px"}
                fontSize={18}
                padding={5}
                borderRadius={10}
                initial={isLargerThanLg && { opacity: 0, scale: 2 }}
                whileInView={isLargerThanLg ? { opacity: 1, scale: 1 } : {}}
              >
                The Battle of Pakistan Begins <br /> We are not rats but
                warriors we will not leave a sinking ship but fight till the
                last breadth. Those with us stand firm our time has arrived and
                those who are afraid and weak step out of the way. The plan has
                three phases/stages: <br /> Phase 1: In phase one we will cover
                the&nbsp;
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
                disclosed when we have completed phase 1. <br /> <br /> Phase 3:
                A plan is in place but we will operate on this in stealth mode
                till D-Day
              </Text>
              <ChakraBox
                width={{ xs: "100vw", lg: "50vw" }}
                initial={{ scale: 1, translate: "50%", opacity: 0 }}
                whileInView={{
                  opacity: [0.3, 0.85, 1],
                  translate: ["50%", "0.1%", 0],
                  scale: [1, 1.25, 1],
                }}
                //@ts-ignore
                transition={{
                  duration: 1.3,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],

                  bounceStiffness: 500,
                  bounceDamping: 20,
                }}
              >
                <Lottie animationData={economy} loop={true} />
              </ChakraBox>{" "}
            </ChakraBox>
          </ChakraBox>
          <ChakraBox
            width={"75vw"}
            marginY={5}
            marginX={"auto"}
            initial={{ opacity: 0, translateY: "-20vh" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            //@ts-ignore
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="https://www.youtube.com/embed/PwLzOxLe4zc"
              style={{
                width: "75vw",
                aspectRatio: "16/9",
              }}
            ></iframe>
          </ChakraBox>
        </Box>
      </Box>
    </main>
  );
}

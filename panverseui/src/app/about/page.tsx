"use client";

import {
  Box,
  chakra,
  Heading,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { isValidMotionProp, motion } from "framer-motion";
import president from "./../../assets/president.jpg";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import piaic from "./../../assets/piaic.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ChakraBox: any = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: ,
  };
  return (
    <main style={{ overflowX: "hidden" }}>
      <ChakraBox
        width={"250px"}
        marginX={"auto"}
        marginY={"12px"}
        initial={{ translateY: "50%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        //@ts-ignore
        transition={{ duration: 0.65 }}
      >
        <Image
          src={president}
          alt={""}
          style={{
            height: 250,
            width: 250,
            borderRadius: "50%",
          }}
        ></Image>
      </ChakraBox>
      <Text
        textAlign={"center"}
        as={motion.p}
        initial={{ opacity: 0, scale: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Dr.Arif Alvi President of Islamic Republic of Pakistan
      </Text>
      <Box>
        <ChakraBox
          display={"flex"}
          initial={{ translateY: "50%", opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          //@ts-ignore
          transition={{ duration: 0.75 }}
        >
          <Box
            borderBottom={1}
            borderStyle={"solid"}
            width={"25vw"}
            marginX="auto"
            marginY={"15px"}
          ></Box>
          <Heading textAlign={"center"}>Collaborators</Heading>
          <Box
            borderBottom={1}
            borderStyle={"solid"}
            width={"25vw"}
            marginX="auto"
            marginY={"15px"}
          ></Box>
        </ChakraBox>

        <Box margin={7}>
          <Heading textAlign={"center"} size={"md"} textColor={"red.500"}>
            <Typewriter
              options={{
                strings: [
                  "Presidential Initiative for Artificial Intelligence & Cloud Computing",
                  "PanaCloud",
                  "Saylani Welfare International Trust",
                ],
                autoStart: true,
                loop: true,
              }}
            />

            {/* Presidential Initiative for Artificial Intelligence & Computing
            (PIAIC) */}
            {/* </Typewriter> */}
          </Heading>
        </Box>
        <ChakraBox
          bgColor={"gray.100"}
          padding={10}
          initial={{ translate: "-50%", opacity: 0 }}
          whileInView={{ translate: 0, opacity: 1 }}
          //@ts-ignore
          transition={{ duration: 0.65 }}
        >
          <Heading
            size={"lg"}
            textAlign={"center"}
            marginY={"5px"}
            marginX={"auto"}
            width={"fit-content"}
            as={motion.h2}
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1.25 }}
            //@ts-ignore
            transition={{ duration: 5 }}
          >
            Our Mission
          </Heading>
          <Box
            as={motion.div}
            width={"75vw"}
            textAlign={"center"}
            marginX={"auto"}
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
        </ChakraBox>
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
          <ChakraBox
            width={"75vw"}
            marginX={"auto"}
            marginY={"50px"}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="https://www.youtube.com/embed/sqtc7s1KZEg"
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
};

export default page;

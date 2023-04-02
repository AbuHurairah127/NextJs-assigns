"use client";
import {
  Heading,
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Badge,
  Flex,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import ziaKhan from "../../assets/ziaKhan.png";
import daniyalNaghori from "../../assets/Daniyal-Naghori.png";
import adilAltaf from "../../assets/adilAltaf.png";
import hiraKhan from "../../assets/hiraKhan.png";
import aliRazzaq from "../../assets/aliRazzaq.png";
import zeeshanHanif from "../../assets/zeeshanhainf.png";
import NextImage from "next/image";
import { isValidMotionProp, motion } from "framer-motion";
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
const page = () => {
  const mainFaculty = [
    {
      name: "Zia Khan",
      Desc: "Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist | CEO Panacloud | Volunteer COO Presidential Initiative for AI and Computing",
      Img: ziaKhan,
      delay: 0,
    },
    {
      name: "Daniyal Naghori",
      Desc: "CEO at PIAIC, CTO at TravelclubIQ and Founder, Director, CEO at ProStack Ltd",
      Img: daniyalNaghori,
      delay: 0.2,
    },
    {
      name: "Hira Khan",
      Desc: "Director at the Women Empowerment Div. of the Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
      Img: hiraKhan,
      delay: 0.4,
    },
    {
      name: "Adil Altaf",
      Desc: "Director at the Women Empowerment Div. of the Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
      Img: adilAltaf,
      delay: 0.6,
    },
    {
      name: "Zeeshan Hanif",
      Desc: "Head of Software Development at Panacloud Pvt Ltd",
      Img: zeeshanHanif,
      delay: 0.8,
    },
    {
      name: "Ali Razzaq",
      Desc: "Web 3.0 enthusiast | Playing with Raspberry Pi these days.",
      Img: aliRazzaq,
      delay: 1,
    },
  ];
  return (
    <main>
      <Heading textAlign={"center"} marginY={"15px"}>
        Our Main Faculty
      </Heading>
      <Flex justifyContent={"space-evenly"} flexWrap={"wrap"} marginY={"15px"}>
        {mainFaculty.map((member, i) => {
          return (
            <ChakraBox
              key={i}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
              marginBottom={10}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // @ts-ignore
              transition={{ duration: 0.5, delay: member.delay }}
            >
              <NextImage
                src={member.Img}
                width={200}
                style={{ borderRadius: "50%" }}
                alt={""}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {member.name}
              </Heading>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                {member.Desc}
              </Text>

              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                wrap={"wrap"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #web-development
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #blockchain
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #metaverse
                </Badge>
              </Stack>
            </ChakraBox>
          );
        })}
      </Flex>
    </main>
  );
};

export default page;

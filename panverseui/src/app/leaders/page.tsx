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
} from "@chakra-ui/react";
import ziaKhan from "../../assets/ziaKhan.png";
import daniyalNaghori from "../../assets/Daniyal-Naghori.png";
import adilAltaf from "../../assets/adilAltaf.png";
import hiraKhan from "../../assets/hiraKhan.png";
import aliRazzaq from "../../assets/aliRazzaq.png";
import zeeshanHanif from "../../assets/zeeshanhainf.png";
import NextImage from "next/image";
const page = () => {
  const mainFaculty = [
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
    {
      name: "Hira Khan",
      Desc: "Director at the Women Empowerment Div. of the Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
      Img: hiraKhan,
    },
    {
      name: "Adil Altaf",
      Desc: "Director at the Women Empowerment Div. of the Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
      Img: adilAltaf,
    },
    {
      name: "Zeeshan Hanif",
      Desc: "Head of Software Development at Panacloud Pvt Ltd",
      Img: zeeshanHanif,
    },
    {
      name: "Ali Razzaq",
      Desc: "Web 3.0 enthusiast | Playing with Raspberry Pi these days.",
      Img: aliRazzaq,
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
            <Flex
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
            </Flex>
          );
        })}
      </Flex>
    </main>
  );
};

export default page;

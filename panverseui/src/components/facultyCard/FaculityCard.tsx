import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import Image, { type StaticImageData } from "next/image";
type Props = {
  profileDesc: string;
  Name: string;
  imgSrc: string | StaticImageData;
};
export default function FaculityCard(props: Props) {
  return (
    <Box py={6}>
      <Box
        maxW={"300px"}
        w={"full"}
        height={"500px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box height="50%">
          <Image
            src={props.imgSrc}
            alt="Profile photo"
            style={{
              width: 230,
              height: 230,
              borderRadius: "50%",
              border: "2px",
              borderStyle: "solid",
              borderColor: "black",
            }}
          />
        </Box>
        <Box>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {props.Name}
          </Heading>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {props.profileDesc}
          </Text>
          {/* 
        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Badge
        px={2}
        py={1}
        bg={useColorModeValue("gray.50", "gray.800")}
        fontWeight={"400"}
        >
        #art
        </Badge>
        <Badge
        px={2}
        py={1}
        bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
          #photography
          </Badge>
          <Badge
          px={2}
          py={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
          >
          #music
          </Badge>
        </Stack> */}
        </Box>
      </Box>
    </Box>
  );
}

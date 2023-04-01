import { Box, Heading, Text } from "@chakra-ui/react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { InfoTypes } from "@/app/page";

type Props = {
  headingText: string;
  ImageSrc: StaticImageData;
  count: number;
  bgColor: string;
};
const InfoCard = (props: InfoTypes) => {
  return (
    <Box
      as={motion.div}
      width={["80vw", "40vw", "20vw", "20vw"]}
      height={225}
      bgColor={props.bg}
      color={"white"}
      borderRadius={13}
      padding={5}
      display={"flex"}
      justifyContent={"space-around"}
      flexDirection="column"
      alignItems={"center"}
      boxShadow={"dark-lg"}
      transition="all"
      transitionDuration={"0.2s"}
      _hover={{
        boxShadow: "2xl",
      }}
      marginBottom={{ base: 10, md: 10, lg: 0 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: 0.8,
        borderRadius: "100%",
      }}
    >
      <Image src={props.image} alt={"img"} width={56}></Image>

      <Text textAlign="center">{props.heading}</Text>
    </Box>
  );
};

export default InfoCard;

import { Box, Heading, Text } from "@chakra-ui/react";
import Image, { type StaticImageData } from "next/image";
import CountUp from "react-countup";
import { useState } from "react";

type Props = {
  headingText: string;
  ImageSrc: StaticImageData;
  count: number;
  bgColor: string;
};
const InfoCard = (props: Props) => {
  const [counterOn, setCounterOn] = useState<Boolean>(false);

  return (
    <Box
      width={["80vw", "40vw", "20vw", "20vw"]}
      height={225}
      bgColor={props.bgColor}
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
    >
      <Image src={props.ImageSrc} alt={"img"} width={56}></Image>

      <Heading>
        {props.count}

        {"+"}
      </Heading>
      <Text textAlign="center">{props.headingText}</Text>
    </Box>
  );
};

export default InfoCard;

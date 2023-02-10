import { Box, Heading, Text } from "@chakra-ui/react";
import Image, { type StaticImageData } from "next/image";
import CountUp from "react-countup";
type Props = {
  headingText: string;
  ImageSrc: StaticImageData;
  count: number;
  countDuration: number;
  bgColor: string;
};
const InfoCard = (props: Props) => {
  return (
    <Box
      width={["80vw", "40vw", "20vw", "20vw"]}
      height={225}
      bgColor={props.bgColor}
      color={"white"}
      borderRadius={13}
      padding={3}
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
    >
      <Image src={props.ImageSrc} alt={"img"}></Image>
      <Heading>
        <CountUp end={props.count} duration={props.countDuration} />
      </Heading>
      <Text textAlign="center">{props.headingText}</Text>
    </Box>
  );
};

export default InfoCard;

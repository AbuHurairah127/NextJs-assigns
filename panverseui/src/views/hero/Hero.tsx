import { Box } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      height={350}
      width={350}
      position={"absolute"}
      zIndex={-5}
      left={-165}
      top={[50, 75, 100, 130]}
      maxWidth={"100vw"}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FA4D56"
          d="M58.9,-22.6C64.9,-0.5,50.6,24.7,27.7,42.4C4.8,60,-26.7,70.1,-44.8,57.8C-62.9,45.6,-67.5,11.1,-57.8,-16C-48.1,-43.1,-24.1,-62.8,1.2,-63.2C26.4,-63.5,52.8,-44.6,58.9,-22.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </Box>
  );
};

export default Hero;

import React from "react";
import { Box } from "@chakra-ui/react";
import "./_style.css";

export default function circleRotation() {
  return (
    <Box position="absolute" w="280px" h="300px" left="20%" zIndex="-1">
      <Box
        className="circle-1"
        position="absolute"
        w="55vh"
        h="55vh"
        bg="#f66"
        borderRadius="50% 50% 50% 70%/50% 50% 70% 60%"
        animation="border-animation 6s infinite linear"
      />
      <Box
        className="circle-2"
        position="absolute"
        w="50vh"
        h="50vh"
        bg="#f92"
        borderRadius="80% 30% 50% 50%/50%"
        animation="border-animation 4s infinite linear"
      />
      <Box
        className="circle-3"
        position="absolute"
        w="45vh"
        h="45vh"
        bg="#fc2"
        borderRadius="40% 40% 50% 40%/30% 50% 50% 50%"
        animation="border-animation 3s infinite linear"
      />
    </Box>
  );
}

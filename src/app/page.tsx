'use client'

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { images, texts } from "./_script";

export default function Home() {

  return (
    <Box
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Heading as="h1" size="4xl" color="white" textAlign="center" mb={4}>
          My Portfolio Site
        </Heading>
        <Text fontSize="xl" color="white" textAlign="center">
          {texts[Math.floor(Math.random() * texts.length)]}
        </Text>
      </Box>
      <Image
        src={images[0]}
        alt="Hero Image"
        objectFit="cover"
        w="100%"
        h="100%"
        top="0"
        left="0"
        zIndex="-1"
        filter="blur(8px)"
      />
    </Box>
  );
}

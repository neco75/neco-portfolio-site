'use client'

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const images = [

  "https://source.unsplash.com/random/1920x1080",
  "https://source.unsplash.com/random/1920x1080",
  "https://source.unsplash.com/random/1920x1080",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
          このページって何書けばいいんですかね？
        </Text>
      </Box>
      <Image
        src={images[currentImageIndex]}
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

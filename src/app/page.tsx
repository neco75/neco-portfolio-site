"use client";

import {
  Box,
  Heading,
  Image,
  Text,
  useDisclosure,
  Fade,
  Center,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { images, texts } from "./_script";
import { Helmet } from "react-helmet";

function useTypingAnimation(text: string, speed: number) {
  const [output, setOutput] = useState("");
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setOutput((output) => output + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return output;
}

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const [randomText, setRandomText] = useState("");
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    setRandomText(texts[Math.floor(Math.random() * texts.length)]);
    setRandomImage(images[Math.floor(Math.random() * images.length)]);
    onToggle();
  }, []);

  const animatedText = useTypingAnimation(randomText, 200);

  return (
    <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Helmet>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. Here you can find my latest work and contact information."
        />
        <meta
          name="keywords"
          content="portfolio, web development, programming"
        />
      </Helmet>
      <Center
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <VStack p={10} w="100vh" h="100%" spacing={8}>
          <Heading
            as="h1"
            size="4xl"
            color="white"
            textAlign="left"
            p={3}
            fontFamily="Arial, sans-serif"
          >
            My portfolio
          </Heading>
          <Fade in={isOpen}>
            <Text
              as="h2"
              fontSize="x-large"
              color="white"
              textAlign="left"
              p={3}
              fontFamily="Arial, sans-serif"
            >
              {animatedText}
            </Text>
          </Fade>
        </VStack>
      </Center>
      <Image
        src={randomImage}
        alt="Hero Image"
        objectFit="cover"
        w="100%"
        h="100%"
        top="0"
        left="0"
        zIndex="-1"
        filter="brightness(50%) blur(10px)"
      />
    </Box>
  );
}

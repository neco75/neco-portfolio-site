import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  return (
    <Box p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Contact
        </Heading>
        <Box display="flex" justifyContent="center">
          <form
            style={{ width: "70%" }}
            action="https://ssgform.com/s/AIDYcShtrahl"
            method="post"
          >
            <VStack spacing={4} align="center">
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="お名前" required width="100%" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="メールアドレス"
                  required
                  width="100%"
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name="お問い合わせ内容" required width="100%" />
              </FormControl>
              <Button type="submit" width="100%">
                Send
              </Button>
            </VStack>
          </form>
        </Box>
        <Box>
          <VStack spacing={4} align="center">
            <HStack spacing={4}>
              <Button
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/neco75?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text className="iconText">GitHub</Text>
              </Button>
              <Button
                leftIcon={<FaTwitter />}
                as="a"
                href="https://twitter.com/ocen_UoA30C2"
                target="_blank"
                rel="noopener noreferrer"
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text className="iconText">X(Twitter)</Text>
              </Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactPage;

import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <Box as="footer" py={6} bg="gray.800" color="white">
            <Flex justify="center" align="center">
                <Link href="https://github.com/your-github-username" isExternal mx={2}>
                    <FaGithub size={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/your-linkedin-username" isExternal mx={2}>
                    <FaLinkedin size={24} />
                </Link>
                <Link href="https://twitter.com/your-twitter-username" isExternal mx={2}>
                    <FaTwitter size={24} />
                </Link>
            </Flex>
            <Text textAlign="center" mt={4}>
                © {new Date().getFullYear()} Your Name. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;

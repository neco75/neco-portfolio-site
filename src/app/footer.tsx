import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <Box as="footer" py={6} mt={4} bg="gray.800" color="white">
            <Flex justify="center" align="center">
                <Link href="https://github.com/neco75?tab=repositories" isExternal mx={2}>
                    <FaGithub size={24} />
                </Link>
                <Link href="https://twitter.com/ocen_UoA30C2" isExternal mx={2}>
                    <FaTwitter size={24} />
                </Link>
            </Flex>
            <Text textAlign="center" mt={4}>
                © {new Date().getFullYear()} Sagara Rikuto.
            </Text>
        </Box>
    );
};

export default Footer;

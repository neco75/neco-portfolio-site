import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import { FaHome, FaUser, FaCode, FaImages, FaBlog, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../../styles/header.css"

const Header = () => {
    return (
        <Box bg="whiteAlpha.100" py={4} mb={4} position="sticky" top="0" zIndex="sticky">
            <Flex maxW="12xl" mx="auto"  align="center">
                    <Link className="header-logo" href="/" ml={7} display="flex" >
                        <Text fontWeight="bold" fontSize="2xl">My Portfolio Site</Text>
                        <Image
                        src="/logo.jpg"
                        alt="Site Logo"
                        boxSize={10}
                        style={{
                            borderRadius: "50%",
                            border: "2px solid #fff",
                            marginLeft: "10px"
                        }}/>
                    </Link>
                <Flex className="header-nav" as="nav" ml="auto" mr={7}>
                        <Link href="/" mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaHome /></Text>
                                <Text fontWeight="bold">Home</Text>
                            </Flex>
                        </Link>
                        <Link href="/about"  mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaUser /></Text>
                                <Text fontWeight="bold">About</Text>
                            </Flex>
                        </Link>
                        <Link href="/skill" mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaCode /></Text>
                                <Text fontWeight="bold">Skill</Text>
                            </Flex>
                        </Link>
                        <Link href="/gallery" mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaImages /></Text>
                                <Text fontWeight="bold">Gallery</Text>
                            </Flex>
                        </Link>
                        <Link href="/blog" mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaBlog /></Text>
                                <Text fontWeight="bold">Blog</Text>
                            </Flex>
                        </Link>
                        <Link href="/contact">
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaEnvelope /></Text>
                                <Text fontWeight="bold">Contact</Text>
                            </Flex>
                        </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
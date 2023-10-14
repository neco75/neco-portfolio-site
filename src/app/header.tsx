import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaHome, FaUser, FaCode, FaImages, FaBlog, FaEnvelope } from "react-icons/fa";
import "../../styles/header.css"

const Header = () => {
    return (
        <Box bg="gray.100" py={4}>
            <Flex maxW="12xl" mx="auto"  align="center">
                <NextLink href="/" passHref >
                    <Link href="/" ml={4}>
                        <Image src="https://pbs.twimg.com/profile_images/1625088585086148608/iiel8eHK_400x400.jpg" alt="Site Logo" boxSize={10} />
                    </Link>
                </NextLink>
                <Flex as="nav" ml="auto" mr={4}>
                    <NextLink href="/" passHref>
                        <Link href="/" mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaHome /></Text>
                                <Text fontWeight="bold">Home</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Link href="/about"  mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaUser /></Text>
                                <Text fontWeight="bold">About</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/skill" passHref>
                        <Link href="/skill" mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaCode /></Text>
                                <Text fontWeight="bold">Skill</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/gallery" passHref>
                        <Link href="/gallery" mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaImages /></Text>
                                <Text fontWeight="bold">Gallery</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Link href="/blog" mr={4}>
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaBlog /></Text>
                                <Text fontWeight="bold">Blog</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                    <NextLink href="/contact" passHref>
                        <Link href="/contact">
                            <Flex align="center">
                                <Text fontWeight="bold" mr={2}><FaEnvelope /></Text>
                                <Text fontWeight="bold">Contact</Text>
                            </Flex>
                        </Link>
                    </NextLink>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
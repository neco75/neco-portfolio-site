import { Box, Flex, Grid, GridItem, Heading, Image, Link, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";

const GalleryPage: NextPage = () => {
    return (
        <Box>
            <Flex>
                <Box mx="auto" p={4} display={{ base: "none", md: "flex" }}>
                    <Box>
                        <Heading as="h1" size="xl" mb={4} textAlign="center">
                            Gallery
                        </Heading>
                        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                            {[1, 2, 3, 4, 5].map((postId) => (
                                <Flex key={postId} direction="column">
                                    <Link as={NextLink} href={`/blog/${postId}`}>
                                        <Flex direction="column">
                                            <Image
                                                src="https://via.placeholder.com/350"
                                                alt="blog thumbnail"
                                                mb={4}
                                            />
                                            <Box>
                                                <Heading as="h2" size="lg">
                                                    Gallery Item Title
                                                </Heading>
                                                <Text fontSize="md" color="gray.500">
                                                    Created on: 2022-01-0{postId}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Link>
                                </Flex>
                            ))}
                        </Grid>
                    </Box>
                </Box>
                <Box mx="auto" p={4} display={{ base: "block", md: "none" }}>
                    <Box>
                        <Heading as="h1" size="xl" mb={4} textAlign="center">
                            Gallery
                        </Heading>
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            {[1, 2, 3, 4, 5].map((postId) => (
                                <Flex key={postId} direction="column">
                                    <Link as={NextLink} href={`/blog/${postId}`}>
                                        <Flex direction="column">
                                            <Image
                                                src="https://via.placeholder.com/350"
                                                alt="blog thumbnail"
                                                mb={4}
                                            />
                                            <Box>
                                                <Heading as="h2" size="lg">
                                                    Gallery Item Title
                                                </Heading>
                                                <Text fontSize="md" color="gray.500">
                                                    Created on: 2022-01-0{postId}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Link>
                                </Flex>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default GalleryPage;

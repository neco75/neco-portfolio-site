import { Box, Heading, Text, Link, Flex, Image, Grid } from "@chakra-ui/react";
import NextLink from "next/link";

const BlogPage = () => {
    return (
        <Box mx="auto" p={4}>
            <Heading as="h1" size="xl" mb={4} textAlign="center">
                Blog
            </Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <Flex direction="column">
                    <Link as={NextLink} href="/blog/1">
                        <Flex direction="column">
                            <Image
                                src="https://via.placeholder.com/150"
                                alt="blog thumbnail"
                                mb={4}
                            />
                            <Box>
                                <Heading as="h2" size="lg">
                                    Blog Post Title
                                </Heading>
                                <Text fontSize="md" color="gray.500">
                                    Created on: 2022-01-01
                                </Text>
                            </Box>
                        </Flex>
                    </Link>
                </Flex>
                <Flex direction="column">
                    <Link as={NextLink} href="/blog/2">
                        <Flex direction="column">
                            <Image
                                src="https://via.placeholder.com/150"
                                alt="blog thumbnail"
                                mb={4}
                            />
                            <Box>
                                <Heading as="h2" size="lg">
                                    Blog Post Title
                                </Heading>
                                <Text fontSize="md" color="gray.500">
                                    Created on: 2022-01-02
                                </Text>
                            </Box>
                        </Flex>
                    </Link>
                </Flex>
                <Flex direction="column">
                    <Link as={NextLink} href="/blog/3">
                        <Flex direction="column">
                            <Image
                                src="https://via.placeholder.com/150"
                                alt="blog thumbnail"
                                mb={4}
                            />
                            <Box>
                                <Heading as="h2" size="lg">
                                    Blog Post Title
                                </Heading>
                                <Text fontSize="md" color="gray.500">
                                    Created on: 2022-01-03
                                </Text>
                            </Box>
                        </Flex>
                    </Link>
                </Flex>
                <Flex direction="column">
                    <Link as={NextLink} href="/blog/4">
                        <Flex direction="column">
                            <Image
                                src="https://via.placeholder.com/150"
                                alt="blog thumbnail"
                                mb={4}
                            />
                            <Box>
                                <Heading as="h2" size="lg">
                                    Blog Post Title
                                </Heading>
                                <Text fontSize="md" color="gray.500">
                                    Created on: 2022-01-04
                                </Text>
                            </Box>
                        </Flex>
                    </Link>
                </Flex>
                <Flex direction="column">
                    <Link as={NextLink} href="/blog/5">
                        <Flex direction="column">
                            <Image
                                src="https://via.placeholder.com/150"
                                alt="blog thumbnail"
                                mb={4}
                            />
                            <Box>
                                <Heading as="h2" size="lg">
                                    Blog Post Title
                                </Heading>
                                <Text fontSize="md" color="gray.500">
                                    Created on: 2022-01-05
                                </Text>
                            </Box>
                        </Flex>
                    </Link>
                </Flex>
            </Grid>
        </Box>
    );
};

export default BlogPage;

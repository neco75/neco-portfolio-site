import { Box, Flex, Grid, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import {getList} from "../../../libs/client"

type GalleryItem = {
    image: string;
    title: string;
    createdOn: string;
};

const galleryList: GalleryItem[] = [
    {
        image: "https://via.placeholder.com/350",
        title: "Gallery Item Title 1",
        createdOn: "2022-01-01"
    },
    {
        image: "https://via.placeholder.com/350",
        title: "Gallery Item Title 2",
        createdOn: "2022-01-02"
    },
    {
        image: "https://via.placeholder.com/350",
        title: "Gallery Item Title 3",
        createdOn: "2022-01-03"
    },
    {
        image: "https://via.placeholder.com/350",
        title: "Gallery Item Title 4",
        createdOn: "2022-01-04"
    },
    {
        image: "https://via.placeholder.com/350",
        title: "Gallery Item Title 5",
        createdOn: "2022-01-05"
    }
];

const GalleryPage = () => {
    return (
        <Flex>
            <Box p={4} mx="auto" display={{ base: "none", md: "flex" }}>
                <Box>
                    <Heading as="h1" size="xl" mb={4} textAlign="center">
                        Gallery
                    </Heading>
                    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                        {galleryList && galleryList.map((item: GalleryItem) => (
                            <Flex key={item.title} direction="column">
                                <NextLink href={`/blog/${item.title}`} passHref>
                                    <Link>
                                        <Flex direction="column">
                                            <Image
                                                src={item.image}
                                                alt="gallery thumbnail"
                                                mb={4}
                                            />
                                            <Box>
                                                <Heading as="h2" size="lg">
                                                    {item.title}
                                                </Heading>
                                                <Text fontSize="md" color="gray.500">
                                                    Created on: {item.createdOn}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Link>
                                </NextLink>
                            </Flex>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box p={4} mx="auto" display={{ base: "block", md: "none" }}>
                <Box>
                    <Heading as="h1" size="xl" mb={4} textAlign="center">
                        Gallery
                    </Heading>
                    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                        {galleryList && galleryList.map((item: GalleryItem) => (
                            <Flex key={item.title} direction="column">
                                <NextLink href={`/blog/${item.title}`} passHref>
                                    <Link>
                                        <Flex direction="column">
                                            <Image
                                                src={item.image}
                                                alt="gallery thumbnail"
                                                mb={4}
                                            />
                                            <Box>
                                                <Heading as="h2" size="lg">
                                                    {item.title}
                                                </Heading>
                                                <Text fontSize="md" color="gray.500">
                                                    Created on: {item.createdOn}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Link>
                                </NextLink>
                            </Flex>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Flex>
    );
};

export default GalleryPage;
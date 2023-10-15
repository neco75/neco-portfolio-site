import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";

interface GalleryItem {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: "1",
        imageUrl: "https://via.placeholder.com/300x300",
        title: "Item 1",
        description: "This is the first item in the gallery.",
    },
    {
        id: "2",
        imageUrl: "https://via.placeholder.com/300x300",
        title: "Item 2",
        description: "This is the second item in the gallery.",
    },
    {
        id: "3",
        imageUrl: "https://via.placeholder.com/300x300",
        title: "Item 3",
        description: "This is the third item in the gallery.",
    },
    {
        id: "4",
        imageUrl: "https://via.placeholder.com/300x300",
        title: "Item 4",
        description: "This is the fourth item in the gallery.",
    },
    {
        id: "5",
        imageUrl: "https://via.placeholder.com/300x300",
        title: "Item 5",
        description: "This is the fifth item in the gallery.",
    },
    {
        id: "6",
        imageUrl: "https://via.placeholder.com/300x300",
        title: "Item 6",
        description: "This is the sixth item in the gallery.",
    },
    {
        id: "7",
        imageUrl: "https://via.placeholder.com/300x300",
        title: "Item 6",
        description: "This is the sixth item in the gallery.",
    },
];

const GalleryPage: NextPage = () => {
    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4} textAlign="center">
                Gallery
            </Heading>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} justifyItems="center" alignItems="center">
                {galleryItems.map((item) => (
                    <GridItem key={item.id}>
                        <Image src={item.imageUrl} alt={item.title} />
                        <Text mt={2} fontWeight="bold">
                            {item.title}
                        </Text>
                        <Text>{item.description}</Text>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default GalleryPage;

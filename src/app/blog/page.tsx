import { Box, Heading, Text } from "@chakra-ui/react";

const BlogPage = () => {
    return (
        <Box maxW="800px" mx="auto" px={4} py={8}>
            <Heading as="h1" size="xl" mb={4}>
                My Blog Post
            </Heading>
            <Text fontSize="lg" mb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                mauris euismod, bibendum velit vel, aliquam sapien. Sed euismod mauris
                euismod, bibendum velit vel, aliquam sapien.
            </Text>
            <Text fontSize="lg" mb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                mauris euismod, bibendum velit vel, aliquam sapien. Sed euismod mauris
                euismod, bibendum velit vel, aliquam sapien.
            </Text>
            <Text fontSize="lg" mb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                mauris euismod, bibendum velit vel, aliquam sapien. Sed euismod mauris
                euismod, bibendum velit vel, aliquam sapien.
            </Text>
        </Box>
    );
};

export default BlogPage;

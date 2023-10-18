import { Box, Heading, Text, Flex, Image, Grid, List, Link } from "@chakra-ui/react";
import { getList } from "../../libs/client";

export default async function StaticPage() {
 const { contents } = await getList();

 if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
 }

 return (
    <Box>
        <Heading as="h1" size="xl" mb={4} textAlign="center">
                Blog
        </Heading>
     <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {contents.map((post) => {
         return (
            <Box key={post.id} p={4} bg="white" borderRadius="md" boxShadow="md">
                <Link href={`/blog/${post.id}`}>
                    <Flex direction="column">
                        <Image
                            src={post.eyecatch?.url}
                            alt="blog thumbnail"
                            mb={4}
                        />
                        <Box>
                            <Heading as="h2" size="lg">
                                {post.title}
                            </Heading>
                            <Text>
                                {post.title}
                            </Text>
                            <Text fontSize="md" color="gray.500">
                                Created on: {post.createdAt}
                            </Text>
                        </Box>
                    </Flex>
                </Link>
            </Box>
         );
        })}
     </Grid>
    </Box>
 );
}
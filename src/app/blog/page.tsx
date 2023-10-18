import { Box, Heading, Text, Flex, Image, Grid, List, Link } from "@chakra-ui/react";
import { getList } from "../../libs/client";

export default async function StaticPage() {
 const { contents } = await getList();

 if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
 }

 return (
    <Box p={4}>
        <Heading as="h1" size="xl" mb={4} textAlign="center">
                Blog
        </Heading>
     <Grid templateColumns={{ base: "repeat(auto-fit, minmax(300px, 1fr))" , md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }} gap={4} p={4}>
        {contents.map((post) => {
            return (
                <Box key={post.id} bg="white" borderRadius="md" overflow="hidden" boxShadow="md" position="relative" border={"1px"} borderColor={"gray.200"}>
                    <Link href={`/blog/${post.id}`} textDecoration="none">
                        <Flex direction="column">
                            <Image
                                src={post.eyecatch?.url}
                                alt="blog thumbnail"
                                mb={4}
                                width="100%"
                                objectFit="cover"
                                height="200"
                                backgroundColor={"gray.100"}
                            />
                            <Box height="200">
                                <Heading as="h2" size="md" p={4}>
                                    {post.title.slice(0, 50)}{post.title.length > 50 ? "..." : ""}
                                </Heading>
                            </Box>
                        </Flex>
                        <Text fontSize="md" color="gray.500" position="absolute" bottom={0} right={0} p={4}>
                            {new Date(post.createdAt).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
                        </Text>
                    </Link>
                </Box>
            );
        })}
     </Grid>
    </Box>
 );
}
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

const AboutPage = () => {
    return (
        <Box p={4}>
                        <Heading as="h1" size="xl" mb={4} textAlign="center">
                About
            </Heading>
            <Flex direction="column" alignItems="center" mb={8}>
                <Image src="https://pbs.twimg.com/profile_images/1625088585086148608/iiel8eHK_400x400.jpg" alt="[Your Name]" borderRadius="full" boxSize="150px" objectFit="cover" />
                <Heading as="h1" size="xl" mt={4} mb={2} textAlign="center">
                    [Your Name]
                </Heading>
                <Text fontSize="lg" mb={4}>
                    [Your Age] years old, [Your Profession] based in [Your Location]
                </Text>
                <Text fontSize="lg" mb={4}>
                    HN: [Your HN]
                </Text>
                <Text fontSize="lg" mb={4}>
                    [Your University], [Your Grade]
                </Text>
                <Text fontSize="lg" mb={4}>
                    [Your Club or Organization]
                </Text>
            </Flex>
            <Box mb={8}>
                <Heading as="h2" size="lg" mb={4}>
                    About Me
                </Heading>
                <Text fontSize="lg" mb={4}>
                    [Your Interests]
                </Text>
                <Text fontSize="lg" mb={4}>
                    [Your Hobbies]
                </Text>
                <Text fontSize="lg" mb={4}>
                    [Your Other Hobbies]
                </Text>
                <Text fontSize="lg" mb={4}>
                    [Your Other Interests]
                </Text>
                <Text fontSize="lg" mb={4}>
                    [Your One-Liner]
                </Text>
            </Box>
            <Box>
                <Heading as="h2" size="lg" mb={4}>
                    About This Portfolio
                </Heading>
                <Text fontSize="lg" mb={4}>
                    This portfolio was created using [Your Tools]. It showcases my [Your Skills] and [Your Achievements].
                </Text>
            </Box>
        </Box>
    );
};

export default AboutPage;
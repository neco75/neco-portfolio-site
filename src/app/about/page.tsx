import { Box, Heading, Text } from "@chakra-ui/react";

const AboutPage = () => {
    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4}>
                About Me
            </Heading>
            <Text fontSize="lg" mb={4}>
                Hi there! My name is [Your Name] and I&apos;m a [Your Profession] based in [Your Location]. I have [Number of Years] years of experience in [Your Field] and I&apos;m passionate about [Your Interests].
            </Text>
            <Text fontSize="lg" mb={4}>
                In my free time, I enjoy [Your Hobbies] and [Your Other Hobbies]. I also love to [Your Other Interests].
            </Text>
            <Text fontSize="lg" mb={4}>
                If you&apos;d like to get in touch, feel free to email me at [Your Email] or connect with me on [Your Social Media].
            </Text>
        </Box>
    );
};

export default AboutPage;

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { NextPage } from "next";

export type Skill = {
    name: string;
    level: string;
    description: string;
  };

const skills: Skill[] = [
    {
        name: "HTML",
        level: "Expert",
        description:
            "I have been using HTML for over 5 years and have a deep understanding of its semantics and best practices.",
    },
    {
        name: "CSS",
        level: "Expert",
        description:
            "I have been using CSS for over 5 years and have a deep understanding of its layout and styling capabilities.",
    },
    {
        name: "JavaScript",
        level: "Expert",
        description:
            "I have been using JavaScript for over 5 years and have a deep understanding of its core concepts and modern frameworks.",
    },
    {
        name: "React",
        level: "Expert",
        description:
            "I have been using React for over 3 years and have built several complex applications with it.",
    },
    {
        name: "TypeScript",
        level: "Intermediate",
        description:
            "I have been using TypeScript for over 2 years and have a good understanding of its type system and benefits.",
    },
    {
        name: "Next.js",
        level: "Intermediate",
        description:
            "I have been using Next.js for over 1 year and have built several server-side rendered applications with it.",
    },
];

const SkillsPage: NextPage = () => {
    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4} textAlign="center">
                Skills
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                {skills.map((skill) => (
                    <Box key={skill.name} p={4} borderWidth="1px" borderRadius="lg">
                        <Heading as="h2" size="md" mb={2}>
                            {skill.name}
                        </Heading>
                        <Text mb={2}>
                            <strong>Level:</strong> {skill.level}
                        </Text>
                        <Text>{skill.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default SkillsPage;

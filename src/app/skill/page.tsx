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
        level: "☆☆★★★",
        description:
            "ちょっと分かる",
    },
    {
        name: "CSS",
        level: "☆☆★★★",
        description:
            "ちょっと分かるかもしれない",
    },
    {
        name: "JavaScript",
        level: "☆★★★★",
        description:
            "理解したい",
    },
    {
        name: "TypeScript",
        level: "☆★★★★",
        description:
            "勉強中。エラーの原因分からなくてany使うレベル。間違いなくTypescriptの強みを使えてない",
    },
    {
        name: "Next.js",
        level: "☆★★★★",
        description:
            "勉強中。このサイト実装できるくらい",
    },
    {
        name: "C言語",
        level: "☆☆★★★",
        description:
            "授業で勉強。チュートリアル終了くらい",
    },
    {
        name: "Java",
        level: "☆★★★★",
        description:
            "バイト先で勉強中。ThymeleafやSpringFrameworkなども勉強してます",
    },
];

const SkillsPage: NextPage = () => {
    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4} textAlign="center">
                Skill
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

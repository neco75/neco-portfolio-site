import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Skill } from "./_types";
import { skills } from "./_data";

const Page: NextPage = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb="4">
        Skills
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="4">
        {skills.map((skill: Skill) => (
          <Box key={skill.name}>
            <Heading as="h3" size="md" mb="2">
              {skill.name}
            </Heading>
            <Text mb="2">{skill.level}</Text>
            <Text>{skill.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Page;
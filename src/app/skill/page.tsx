import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Skill } from "./_types";
import { skills } from "./_data";

const SkillsPage: NextPage = () => {
  return (
      <Box p={4}>
          <Heading as="h1" size="xl" mb={4} textAlign="center">
              Skill
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {skills.map((skill:Skill) => (
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
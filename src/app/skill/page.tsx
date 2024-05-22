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
          {/* levelの目安 */}
            <Box mt={4}>
                <Heading as="h2" size="md" mb={2}>
                    Levelの目安
                </Heading>
                <Text>
                    <Box>
                        ☆★★★★:授業などで触れたことがある程度。日常的に利用できるわけではない。
                    </Box>
                    <Box>
                        ☆☆★★★:リファレンスがあればおよそのことはできる。
                    </Box>
                    <Box>
                        ☆☆☆★★:リファレンスが多少で、ほぼ自由に使いこなせ、任意の処理が実現できる。
                    </Box>
                    <Box>
                        ☆☆☆☆★:自由自在に使いこなせていて、他人に教えられるレベル。
                    </Box>
                    <Box>
                        ☆☆☆☆☆:拡張ライブラリを実装し、公開できる。
                    </Box>
                </Text>
            </Box>
      </Box>
  );
};

export default SkillsPage;
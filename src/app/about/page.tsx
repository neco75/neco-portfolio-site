"use client";

import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./_style.css";

const AboutPage = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        About Me
      </Heading>
      {isLargeScreen ? (
        <Box>
          <Flex justify="center" mb={8}>
          <Image
            src="/logo.jpg"
            alt="Profile Picture"
            borderRadius="full"
            boxSize="50%"
            objectFit="cover"
          />

          <Table mb={8}>
            <Tbody>
              <Tr>
                <Td>
                  <Text as="span" fontWeight="bold">
                    名前
                  </Text>
                </Td>
                <Td>相良 陸斗</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="span" fontWeight="bold">
                    生年月日
                  </Text>
                </Td>
                <Td>2003/09/30</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="span" fontWeight="bold">
                    所属
                  </Text>
                </Td>
                <Td>会津大学 コンピュータ理工学科</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="span" fontWeight="bold">
                    学年
                  </Text>
                </Td>
                <Td>学部3年</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="span" fontWeight="bold">
                    バイト
                  </Text>
                </Td>
                <Td>
                  <Flex align="center">
                    <Link href="https://plise.co.jp" isExternal>
                      株式会社PLISE (2023年)
                    </Link>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="span" fontWeight="bold">
                    出身
                  </Text>
                </Td>
                <Td>福島県 喜多方市</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text as="span" fontWeight="bold">
                    HN
                  </Text>
                </Td>
                <Td>neco / ocen</Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
          <Flex align="top" justify="center" mb={8} mx={4}>
        <Box alignContent={"center"} justifyContent={"center"} p={4}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            趣味と興味
          </Heading>
          <Table mb={8}>
            <Tbody>
              <Tr>
                <Td>
                    <Text as="span" fontWeight="bold">
                      趣味
                    </Text>
                </Td>
                <Td>
                <Text className="profile-details-text">惰眠</Text>
                    <Text className="profile-details-text">食事</Text>
                    <Text className="profile-details-text">
                      予定を決めない散歩・旅行
                    </Text>
                    <Text className="profile-details-text">ノベルゲーム</Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text
                    className="profile-details"
                    fontSize="lg"
                    mb={4}
                    display="flex"
                  >
                    <Text as="span" fontWeight="bold">
                      興味のある分野
                    </Text>

                  </Text>
                </Td>
                <Td>
                <Text className="profile-details-text">
                      フロントエンド開発
                    </Text>
                    <Text className="profile-details-text">デザイン</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box alignContent={"center"} justifyContent={"center"} p={4}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            このサイトについて
          </Heading>
          <Table mb={8}>
            <Tbody>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      使用言語
                    </Text>
                  </Text>
                </Td>
                <Td>TypeScript</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      ライブラリ・フレームワーク
                    </Text>
                  </Text>
                </Td>
                <Td>React Next.js13</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      レイアウト
                    </Text>
                  </Text>
                </Td>
                <Td>Chakra UI</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      ページ遷移ライブラリ
                    </Text>
                  </Text>
                </Td>
                <Td>framer-motion</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      ブログ作成
                    </Text>
                  </Text>
                </Td>
                <Td>microCMS</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      ホスティング
                    </Text>
                  </Text>
                </Td>
                <Td>Netlify</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
        </Box>
        
        
      ) : (
        <>
          <Box alignContent={"center"} justifyContent={"center"} p={4}>
            <Image
              src="/logo.jpg"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="50%"
              objectFit="cover"
              display="block"
              margin="auto"
            />
          </Box>

          <Table mb={8}>
            <Tbody>
              <Tr>
                <Td>名前</Td>
                <Td>相良 陸斗</Td>
              </Tr>
              <Tr>
                <Td>生年月日</Td>
                <Td>2003/09/30</Td>
              </Tr>
              <Tr>
                <Td>所属</Td>
                <Td>会津大学 コンピュータ理工学科</Td>
              </Tr>
              <Tr>
                <Td>学年</Td>
                <Td>学部3年</Td>
              </Tr>
              <Tr>
                <Td>バイト</Td>
                <Td>
                  <Flex align="center">
                    <Link href="https://plise.co.jp" isExternal>
                      株式会社PLISE (2023年)
                    </Link>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>出身</Td>
                <Td>福島県 喜多方市</Td>
              </Tr>
              <Tr>
                <Td>HN</Td>
                <Td>neco / ocen</Td>
              </Tr>
            </Tbody>
          </Table>

          <Box alignContent={"center"} justifyContent={"center"} p={4}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            趣味と興味
          </Heading>
          <Table mb={8}>
            <Tbody>
              <Tr>
                <Td>
                    <Text as="span" fontWeight="bold">
                      趣味
                    </Text>
                </Td>
                <Td>
                <Text className="profile-details-text">惰眠</Text>
                    <Text className="profile-details-text">食事</Text>
                    <Text className="profile-details-text">
                      予定を決めない散歩・旅行
                    </Text>
                    <Text className="profile-details-text">ノベルゲーム</Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text
                    className="profile-details"
                    fontSize="lg"
                    mb={4}
                    display="flex"
                  >
                    <Text as="span" fontWeight="bold">
                      興味のある分野
                    </Text>

                  </Text>
                </Td>
                <Td>
                <Text className="profile-details-text">
                      フロントエンド開発
                    </Text>
                    <Text className="profile-details-text">デザイン</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box alignContent={"center"} justifyContent={"center"} p={4}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            このサイトについて
          </Heading>
          <Table mb={8}>
            <Tbody>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      使用言語
                    </Text>
                  </Text>
                </Td>
                <Td>TypeScript</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      ライブラリ・フレームワーク
                    </Text>
                  </Text>
                </Td>
                <Td>React Next.js13</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      レイアウト
                    </Text>
                  </Text>
                </Td>
                <Td>Chakra UI</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      ページ遷移ライブラリ
                    </Text>
                  </Text>
                </Td>
                <Td>framer-motion</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      ブログ作成
                    </Text>
                  </Text>
                </Td>
                <Td>microCMS</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontSize="lg" mb={2}>
                    <Text as="span" fontWeight="bold">
                      ホスティング
                    </Text>
                  </Text>
                </Td>
                <Td>Netlify</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        </>
      )}

      

      <Text fontSize="lg" mb={4} textAlign="center">
        まだまだ未熟な学生ですが、よろしくお願いします。
      </Text>
    </Box>
  );
};

export default AboutPage;

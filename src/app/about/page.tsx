import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./_style.css"

const AboutPage = () => {
    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4} textAlign="center">
                About Me
            </Heading>
            <Flex direction="column" alignItems="center" mb={8}>
                <Image src="/logo.jpg" alt="Profile Picture" borderRadius="full" boxSize="200px" objectFit="cover" />
                <Text fontSize="3xl" mb={4} fontWeight="bold">
                    相良 陸斗
                </Text>
                <Text fontSize="lg" mb={4}>
                    生年月日: 2003/09/30
                </Text>
                <Text fontSize="lg" mb={4}>
                    所属: 会津大学 コンピュータ理工学科
                </Text>
                <Text fontSize="lg" mb={4}>
                    学年: 学部2年
                </Text>
                <Text fontSize="lg" mb={4}>
                    <Flex justifyContent="center">
                        <Box mr={2}>
                            <Link href="https://plise.co.jp" display="flex" alignItems="center" isExternal>
                                <Text fontSize="lg" mr={2}>バイト: 株式会社PLISE</Text>
                                <FaExternalLinkAlt />
                            </Link>
                        </Box>
                    </Flex>
                </Text>
                <Text fontSize="lg" mb={4}>
                    出身: 福島県 喜多方市
                </Text>
                <Text fontSize="lg" mb={4}>
                    HN: neco / ocen
                </Text>
            </Flex>
            <Flex direction="column" alignItems="center" mb={8}>
                <Heading as="h2" size="lg" mb={4}>
                    趣味と興味
                </Heading>
                <Box textAlign="center">
                    <Text className="profile-details" fontSize="lg" mb={4} display="flex">
                        <Text as="span" fontWeight="bold">趣味</Text>
                        <Text className="profile-details-text">惰眠</Text>
                        <Text className="profile-details-text">食事</Text>
                        <Text className="profile-details-text">予定を決めない散歩・旅行</Text>
                        <Text className="profile-details-text">ノベルゲーム</Text>
                    </Text>
                    <Text className="profile-details" fontSize="lg" mb={4} display="flex">
                        <Text as="span" fontWeight="bold">興味のある技術</Text>
                        <Text className="profile-details-text">フロントエンド開発</Text>
                        <Text className="profile-details-text">デザイン</Text>
                    </Text>
                </Box>
            </Flex>
            <Flex direction="column" alignItems="center" mb={8}>
                <Heading as="h2" size="lg" mb={4}>
                    このサイトについて
                </Heading>
                        <Text fontSize="lg" mb={2}><Text as="span" fontWeight="bold">使用言語</Text>:TypeScript</Text>
                        <Text fontSize="lg" mb={2}><Text as="span" fontWeight="bold">フレームワーク</Text>:Next.js13</Text>
                        <Text fontSize="lg" mb={2}><Text as="span" fontWeight="bold">レイアウト</Text>:ChakraUI</Text>
                        <Text fontSize="lg" mb={2}><Text as="span" fontWeight="bold">ページ遷移ライブラリ</Text>:framer-motion</Text>
                        <Text fontSize="lg" mb={2}><Text as="span" fontWeight="bold">ブログ作成</Text>:microCMS</Text>
                        <Text fontSize="lg" mb={2}><Text as="span" fontWeight="bold">ホスティング</Text>:Netlify</Text>
            </Flex>
            <Text fontSize="lg" mb={4} textAlign="center">
                まだまだ未熟な学生ですが、よろしくお願いします。
            </Text>
        </Box>
    );
};

export default AboutPage;

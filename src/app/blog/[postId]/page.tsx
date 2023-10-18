import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/client";
import "../../../../styles/default_style_sheet.scss";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

export async function generateStaticParams() {
 const { contents } = await getList();

 const paths = contents.map((post) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({
 params: { postId },
}: {
 params: { postId: string };
}) {
 const post = await getDetail(postId);

 const time = new Date(post.createdAt).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

 if (!post) {
    notFound();
}
 return (
        // post-articleを中央に配置
        <Box width="100%" display="flex" justifyContent="center" padding="0 15%" bgColor="#EEEEEE">
            <Box className="post-article" p={5} margin="0 auto" width="100%" bgColor="white" borderRadius="md" boxShadow="lg">
                    <Heading as="h1">{post.title}</Heading>
                    <Text as="h2" float="right">記入日:{time}</Text>
                    <Image
                        src={post.eyecatch?.url}
                        alt="blog thumbnail"
                        mb={4}
                        width="100%"
                    />
                    <Box>{parse(post.content)}</Box>
            </Box>
        </Box>
 );
}
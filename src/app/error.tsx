'use client'

import { Box, Heading } from "@chakra-ui/react";

// エラー画面
const Error = () => {
    return (
        <Box textAlign="center" mt="10%">
            <Heading as="h1" fontSize="5xl" fontWeight="bold" mb="3">
                500
            </Heading>
            <Heading as="h2" fontSize="2xl" fontWeight="bold">
                Server Error
            </Heading>
        </Box>
    );
};

export default Error;

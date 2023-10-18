import { Box, Spinner, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const shake = keyframes`
    0% { transform: translateX(0); }
    10% { transform: translateX(-10px); }
    20% { transform: translateX(10px); }
    30% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    50% { transform: translateX(-10px); }
    60% { transform: translateX(10px); }
    70% { transform: translateX(-10px); }
    80% { transform: translateX(10px); }
    90% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
`;

const Loading = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Spinner size="xl" color="yellow.500" />
            <Text
                fontSize="xl"
                fontWeight="bold"
                color="gray.500"
                mt="4"
                css={{ animation: `${shake} 2s infinite` }}
            >
                Loading...
            </Text>
        </Box>
    );
};

export default Loading;

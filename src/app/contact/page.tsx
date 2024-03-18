"use client"

import { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Text,
    Textarea,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter} from "react-icons/fa";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const toast = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });
        const data = await res.json();
        if (data.success) {
            toast({
                title: "Message sent.",
                description: "Thank you for contacting us.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setName("");
            setEmail("");
            setMessage("");
        } else {
            toast({
                title: "An error occurred.",
                description: "Please try again later.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={4}>
            <VStack spacing={8} align="stretch">
            <Heading as="h1" size="xl" mb={4} textAlign="center">
                Contact
            </Heading>
                <Box>
                    <Text textAlign="center">
                        現在機能していません。XアカウントからのDMをお願いします。
                    </Text>
                </Box>
                <Box display="flex" justifyContent="center">
                    <form onSubmit={handleSubmit} style={{width: "70%"}}>
                        <VStack spacing={4} align="center">
                            <FormControl id="name" isRequired> 
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    width="100%"
                                />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    width="100%"
                                />
                            </FormControl>
                            <FormControl id="message" isRequired>
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    width="100%"
                                />
                            </FormControl>
                            <Button type="submit" width="100%">Send</Button>
                        </VStack>
                    </form>
                </Box>
                <Box>
                    <VStack spacing={4} align="center">
                        <HStack spacing={4}>
                            <Button
                                leftIcon={<FaGithub />}
                                as="a"
                                href="https://github.com/neco75?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                width="100%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                >
                                <Text className="iconText">GitHub</Text>
                            </Button>
                            <Button
                                leftIcon={<FaTwitter />}
                                as="a"
                                href="https://twitter.com/ocen_UoA30C2"
                                target="_blank"
                                rel="noopener noreferrer"
                                width="100%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Text className="iconText">X(Twitter)</Text>
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default ContactPage;

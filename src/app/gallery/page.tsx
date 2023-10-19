'use client'

import { useState } from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "./style.css"
import GalleryItem from "./_GalleryItem";
import galleryList from "./_GalleryList";

const GalleryPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const handleImageClick = (image: string) => {
        setShowModal(true);
        setModalImage(image);
    };

    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4} textAlign="center">
                Gallery
            </Heading>
            <Box id="gallery" className="container-fluid" p={4} mx="auto" >
                {galleryList && galleryList.map((item: GalleryItem) => (
                    <Box className="galleryItem" key={item.title} position="relative" onClick={() => handleImageClick(item.image)}>
                        <Image src={item.image} alt={item.title} />
                        <Box position="absolute" bottom="0" left="0" p={4} bg="rgba(0, 0, 0, 0.5)" color="white" width="100%">
                            <Heading as="h2" size="lg">
                                {item.title}
                            </Heading>
                            <Text fontSize="md" color="gray.500">
                                Created on: {item.createdOn}
                            </Text>
                        </Box>
                    </Box>
                ))}
             </Box>
             {showModal && (
                              <Box
                                position="fixed"
                                top="0"
                                left="0"
                                width="100%"
                                height="100%"
                                bg="rgba(0, 0, 0, 0.5)"
                                zIndex="9999"
                                onClick={() => setShowModal(false)}
                              >
                                <Box
                                  display="flex"
                                  justifyContent="center"
                                  alignItems="center"
                                  width="100%"
                                  height="100%"
                                >
                                  <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    p={4}
                                    maxWidth="80%"
                                  >
                                    <Image
                                      src={modalImage}
                                      alt="modal image"
                                      display="block"
                                      margin="0 auto"
                                      maxHeight="80vh"
                                    />
                                    <Box p={4} bg="rgba(0, 0, 0, 0.5)" color="white" width="100%">
                                      <Heading as="h2" size="lg">
                                        {galleryList.find((item) => item.image === modalImage)?.title}
                                      </Heading>
                                      <Text fontSize="md" color="gray.500">
                                        Created on:{" "}
                                        {galleryList.find((item) => item.image === modalImage)?.createdOn}
                                      </Text>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            )}
                          </Box>
                );
              };
              export default GalleryPage;

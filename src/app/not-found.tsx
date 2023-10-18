'use client'

import { useState, useEffect } from "react";
import { Box, Text, Link } from "@chakra-ui/react";

type FallingLinkProps = {
    href: string;
    children: React.ReactNode;
  };

const FallingLink = ({ href, children }:FallingLinkProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [linkPosition, setLinkPosition] = useState({ top: 0, left: 0, height: 0, width: 0 });

    useEffect(() => {
        const link = document.querySelector(`a[href="${href}"]`);
        if (link instanceof HTMLElement) {
          const height = link.offsetHeight;
          const width = link.offsetWidth;
          const top = link.offsetTop;
          const left = link.offsetLeft;
          setLinkPosition({ top, left, height, width });
        }

        const fallingAnimation = `
            @keyframes falling {
                0% {
                    transform: translate(${linkPosition.left}px, ${linkPosition.top}px);
                }
                100% {
                    transform: translate(${linkPosition.left}px, ${linkPosition.top + linkPosition.height + 50}px);
                }
            }
        `;

        const style = document.createElement("style");
        style.innerHTML = fallingAnimation;
        document.head.appendChild(style);

        if (link instanceof HTMLElement) {
          link.style.animation = "falling 1s forwards";
          link.addEventListener("animationend", () => {
              link.style.animation = "";
          });
        }

        return () => {
            document.head.removeChild(style);
        };
    }, [href]);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link
            href={href}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            style={{
                color: isHovered ? "red" : "inherit",
                transform: isHovered ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
            }}
        >
            {children}
        </Link>
    );
};

const NotFound = () => {
    return (
        <Box
            textAlign="center"
            height="80vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Box
                fontSize="5xl"
                fontWeight="bold"
                mb="3"
            >
                404
            </Box>
            <Box fontSize="xl" fontWeight="bold">
                Not Found
            </Box>
            <Box p={3}>
                <FallingLink href="/contact">
                    <Text>問題点はこちらにどうぞ</Text>
                </FallingLink>
            </Box>
        </Box>
    );
};

export default NotFound;

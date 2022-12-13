import { Flex, Text, Image, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidth from "./MaxWidth";

function NavLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href}>
      <Text
        fontSize="18px"
        _hover={{
          textDecoration: "underline",
        }}
      >
        {title}
      </Text>
    </Link>
  );
}

export default function Topnav() {
  const [isScolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="sticky"
      left="0"
      right="0"
      top="0"
      bg="white"
      boxShadow={isScolled ? "0 0 10px rgba(0,0,0,.1)" : "none"}
      transition="all .2s ease-in-out"
      zIndex="100"
    >
      <MaxWidth>
        <Flex
          py={{
            base: isScolled ? ".5rem" : "1rem",
            lg: isScolled ? "1rem" : "2rem",
          }}
          h="auto"
          justifyContent="space-between"
          alignItems="center"
          transition="all .2s ease-in-out"
        >
          <Image
            src="/images/logo/black.png"
            alt="ABLE Logo"
            h={{ base: "1.5rem", lg: "2.5rem" }}
          />
          <Flex gap="4rem" display={{ base: "none", md: "flex" }}>
            <NavLink href="#features" title="Features" />
            <NavLink href="#specifications" title="Specifications" />
            <NavLink href="#about-us" title="About Us" />
          </Flex>

          <Button colorScheme="able" variant="cta">
            Kickstart Us
          </Button>
        </Flex>
      </MaxWidth>
    </Box>
  );
}

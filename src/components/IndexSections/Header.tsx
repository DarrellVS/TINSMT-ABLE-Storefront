import {
  Box,
  Image,
  Text,
  Flex,
  Grid,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function HeaderSection() {
  return (
    <Grid templateColumns={{ base: "auto", md: "1fr 1fr" }} alignItems="start">
      <Box>
        <Flex alignItems="end" gap="1.5rem">
          <Heading variant="pageTitle" fontSize={{ base: "64px", md: "80px" }}>
            (T)ABLE
          </Heading>
          <Text
            fontFamily="Montserrat"
            fontWeight="500"
            fontStyle="italic"
            fontSize="24px"
            mb={{ base: ".5rem", md: ".25rem" }}
            display={{ base: "none", sm: "block" }}
          >
            By ABLE
          </Text>
        </Flex>
        <Box
          mt="1rem"
          fontSize="21px"
          fontWeight="extrabold"
          letterSpacing=".2rem"
          opacity="0.6"
          fontFamily="Montserrat"
        >
          <Text>EFFICIENT</Text>
          <Text>ACCESSIBLE</Text>
          <Text>CLEAN</Text>
        </Box>
        <Button variant="cta" mt="3rem" fontSize="1.25rem">
          Pre-Order Now
        </Button>
      </Box>
      <Image
        src="/images/hero.png"
        alt="Desk hero"
        mt={{ base: "2rem", md: "0" }}
      />
    </Grid>
  );
}

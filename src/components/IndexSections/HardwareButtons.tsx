import { Box, Image, Text, Grid, Heading } from "@chakra-ui/react";
import React from "react";

export default function HardwareButtons() {
  return (
    <Grid
      templateColumns={{ base: "auto", md: "1fr 1.5fr" }}
      gap={{ base: "2rem", md: "5rem" }}
      alignItems="center"
      mt="10rem"
    >
      <Box textAlign={{ base: "center", md: "left" }}>
        <Heading fontSize="32px" fontWeight="400" opacity="0.8">
          Use
        </Heading>
        <Heading fontSize="42px" fontWeight="900" fontStyle="italic">
          Presets
        </Heading>
        <Heading fontSize="32px" fontWeight="400" opacity="0.8">
          Or Customize
        </Heading>

        <Text mt="2rem">
          Built with cutting edge technology, our interface is the perfect tool
          to help you get the most out of your workspace.
          <br />
          <br />
          With a simple and intuitive design, you can easily navigate through
          our interface and get the most out of your (T)ABLE.
        </Text>
      </Box>
      <Image
        src="/images/Capacitive Buttons.png"
        alt="charger image"
        rounded="14px"
      />
    </Grid>
  );
}

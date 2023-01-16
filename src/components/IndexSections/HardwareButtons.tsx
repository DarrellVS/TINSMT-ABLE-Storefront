import {
  Box,
  Image,
  Text,
  Grid,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export default function HardwareButtons() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const image = (
    <Image
      src="/images/Capacitive Buttons.png"
      alt="charger image"
      rounded="14px"
    />
  );

  return (
    <Grid
      templateColumns={{ base: "auto", md: "1fr 1.5fr" }}
      gap={{ base: "2rem", md: "5rem" }}
      alignItems="center"
      mt={{ base: "5rem", md: "10rem" }}
    >
      {isMobile && image}
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
          Use the capacitive buttons to adjust your desk height, or use the
          gestures to apply a saved height.
        </Text>
        <Text mt=".5rem">
          You can also customize your own presets and save them to the desk.
        </Text>
      </Box>
      {!isMobile && image}
    </Grid>
  );
}

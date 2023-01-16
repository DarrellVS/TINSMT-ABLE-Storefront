import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";

export default function WirelessCharging() {
  const [displayPhone, setDisplayPhone] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const scrollFunctionPhone = useCallback((e: Event) => {
    const img = imgRef.current;
    if (!img) return;
    const imgPos = img.getBoundingClientRect();
    setDisplayPhone(
      window.innerHeight / 2 - imgPos.height / 2 + 50 > imgPos.top
    );
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollFunctionPhone);
    return () => {
      document.removeEventListener("scroll", scrollFunctionPhone);
    };
  }, [scrollFunctionPhone]);

  return (
    <Grid
      templateColumns={{ base: "auto", md: "1.5fr 1fr" }}
      gap={{ base: "2rem", md: "5rem" }}
      alignItems="center"
      mt={{ base: "5rem", md: "10rem" }}
    >
      <Image
        src={
          displayPhone
            ? "/images/Wireless Charging Phone.png"
            : "/images/Wireless Charging.png"
        }
        alt="charger image"
        rounded="14px"
        ref={imgRef}
      />
      <Box textAlign={{ base: "center", md: "left" }}>
        <Heading fontSize="32px" fontWeight="400" opacity="0.8">
          Built-in
        </Heading>
        <Heading fontSize="42px" fontWeight="900" fontStyle="italic">
          Wireless
        </Heading>
        <Flex
          alignItems="center"
          gap="1rem"
          color={displayPhone ? "#3ebc3e" : ""}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Heading fontSize="32px" fontWeight="400" opacity="0.8">
            Charging
          </Heading>
          <Box
            transform={`scale(${displayPhone ? "1.5" : "0"})`}
            transition="all .25s ease-in-out"
            mt=".2rem"
          >
            <BsCheck2Circle />
          </Box>
        </Flex>

        <Text mt="2rem">
          Built with cutting edge technology, our interface is the perfect tool
          to help you get the most out of your workspace.
          <br />
          <br />
          With a simple and intuitive design, you can easily navigate through
          our interface and get the most out of your (T)ABLE.
        </Text>
      </Box>
    </Grid>
  );
}

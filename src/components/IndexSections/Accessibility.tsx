import React, { useCallback, useEffect, useRef, useState } from "react";
import SectionTitle from "../SectionTitle";
import { Box, Text, Grid, Heading, Image, Button } from "@chakra-ui/react";

export default function AccessibilitySection() {
  const [isExtended, setIsExtended] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const scrollFunctionAccessibility = useCallback((e: Event) => {
    const img = imgRef.current;
    if (!img) return;
    const imgPos = img.getBoundingClientRect();
    setIsExtended(window.innerHeight / 2 - imgPos.height / 2 + 50 > imgPos.top);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollFunctionAccessibility);
    return () => {
      document.removeEventListener("scroll", scrollFunctionAccessibility);
    };
  }, [scrollFunctionAccessibility]);

  return (
    <>
      <SectionTitle
        title="Elevate Your Workspace"
        subtitle="Technology"
        mt={{ base: "5rem", md: "10rem" }}
      />

      <Grid
        templateColumns={{ base: "auto", md: "1.5fr 1fr" }}
        gap={{ base: "2rem", md: "5rem" }}
        alignItems="center"
      >
        <Image
          src={isExtended ? "/images/Front Extended.png" : "/images/Front.png"}
          alt="gui image"
          rounded="14px"
          ref={imgRef}
        />
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="32px" fontWeight="400" opacity="0.8">
            Digital
          </Heading>
          <Heading fontSize="42px" fontWeight="900" fontStyle="italic">
            Adjustable
          </Heading>
          <Heading fontSize="32px" fontWeight="400" opacity="0.8">
            Height
          </Heading>

          <Text mt="2rem">
            Raise your (T)ABLE to your desired height with the touch of a
            button.
            <br />
            <br />
            All the way from 72 cm to 132 cm, making it perfect for any
            situation.
          </Text>
        </Box>
      </Grid>
    </>
  );
}

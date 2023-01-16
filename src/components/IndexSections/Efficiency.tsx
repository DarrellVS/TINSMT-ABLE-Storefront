import {
  Box,
  Text,
  Image,
  Grid,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Iframe from "react-iframe";
import SectionTitle from "../SectionTitle";

export default function EfficiencySection() {
  const [displayIframe, setDisplayIframe] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <SectionTitle
        title="Supercharge Your Workspace Efficiency"
        subtitle="Features"
        mt={{ base: "5rem", md: "10rem" }}
      />

      <Box>
        {displayIframe && !isMobile ? (
          <>
            <Box rounded="14px" h="40rem" overflow="hidden">
              <Iframe
                url="https://able.darrellvs.nl"
                width="100%"
                height="100%"
              />
            </Box>
            <Button
              variant="cta"
              onClick={() => setDisplayIframe(false)}
              left="50%"
              transform="translateX(-50%)"
              mt="1rem"
            >
              Exit Interface
            </Button>
          </>
        ) : (
          <Grid
            templateColumns={{ base: "auto", md: "1.5fr 1fr" }}
            gap={{ base: "2rem", md: "5rem" }}
            alignItems="center"
          >
            <Image src="/images/Top.png" alt="gui image" rounded="14px" />
            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading fontSize="32px" fontWeight="400" opacity="0.8">
                Our
              </Heading>
              <Heading fontSize="42px" fontWeight="900" fontStyle="italic">
                Performant
              </Heading>
              <Heading fontSize="32px" fontWeight="400" opacity="0.8">
                Interface
              </Heading>

              <Text mt="2rem">
                Built with cutting edge technology, our interface is the perfect
                tool to help you get the most out of your workspace.
              </Text>
              <Text mt=".5rem">
                With a simple and intuitive design, you can easily navigate
                through our interface and get the most out of your (T)ABLE.
              </Text>

              {!isMobile && (
                <Button
                  variant="cta"
                  mt="3rem"
                  onClick={() => setDisplayIframe(true)}
                >
                  Try it now!
                </Button>
              )}
            </Box>
          </Grid>
        )}
      </Box>
    </>
  );
}

import {
  Flex,
  Text,
  Image,
  Heading,
  Grid,
  Box,
  Button,
} from "@chakra-ui/react";
import MaxWidth from "../components/MaxWidth";
import SectionTitle from "../components/SectionTitle";
import Specifications from "../components/Specifications";
import Footer from "../components/Footer";
import Iframe from "react-iframe";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayIframe, setLoadIframe] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadIframe(true);
  //   }, 1000);
  // }, []);

  return (
    <>
      <MaxWidth mt={{ base: "2rem", lg: "12rem" }} pb="8rem">
        <Grid
          templateColumns={{ base: "auto", lg: "1fr 1fr" }}
          alignItems="start"
        >
          <Box>
            <Flex alignItems="end" gap="1.5rem">
              <Heading
                variant="pageTitle"
                fontSize={{ base: "64px", md: "80px" }}
              >
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
            <Button variant="cta" mt="3rem">
              Kickstart Us
            </Button>
          </Box>
          <Image
            src="/images/desk.png"
            alt="Desk hero"
            mt={{ base: "2rem", lg: "none" }}
          />
        </Grid>

        <SectionTitle
          title="Supercharge Your Workspace Efficiency"
          subtitle="Features"
          mt="10rem"
        />

        <Box h="40rem">
          {displayIframe ? (
            <Box rounded="14px" h="100%" overflow="hidden">
              <Iframe
                url="https://able.darrellvs.nl"
                width="100%"
                height="100%"
              />
            </Box>
          ) : (
            <Grid templateColumns="1.5fr 1fr" gap="5rem" alignItems="center">
              <Image
                src="/images/gui.png"
                alt="gui image"
                boxShadow="-10px 10px 20px rgba(0, 0, 0, 0.25)"
                rounded="14px"
              />
              <Box>
                <Heading fontSize="32px" fontWeight="400" opacity="0.8">
                  Our
                </Heading>
                <Heading fontSize="42px" fontWeight="900" fontStyle="italic">
                  Custom
                </Heading>
                <Heading fontSize="42px" fontWeight="900" fontStyle="italic">
                  Performant
                </Heading>
                <Heading fontSize="32px" fontWeight="400" opacity="0.8">
                  Interface
                </Heading>

                <Text mt="2rem">
                  Built with cutting edge technology, our interface is the
                  perfect tool to help you get the most out of your workspace.
                  <br />
                  <br />
                  With a simple and intuitive design, you can easily navigate
                  through our interface and get the most out of your (T)ABLE.
                </Text>

                <Button
                  variant="cta"
                  mt="3rem"
                  onClick={() => setLoadIframe(true)}
                >
                  Try it now!
                </Button>
              </Box>
            </Grid>
          )}
        </Box>

        <SectionTitle
          title="Care About Your Health"
          subtitle="Accessiblity"
          mt="10rem"
        />
        <SectionTitle
          title="Elevate Your Workspace"
          subtitle="Technology"
          mt="10rem"
        />
        <SectionTitle
          title="Built To Last"
          subtitle="Specifications"
          mt="10rem"
        />
        <Specifications />
      </MaxWidth>
      <Footer />
    </>
  );
}

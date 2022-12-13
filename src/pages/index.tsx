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

export default function Home() {
  return (
    <>
      <MaxWidth mt="12rem" pb="8rem">
        <Grid templateColumns="1fr 1fr" alignItems="start">
          <Box>
            <Flex alignItems="end" gap="1.5rem">
              <Heading variant="pageTitle">(T)ABLE</Heading>
              <Text
                fontFamily="Montserrat"
                fontWeight="500"
                fontStyle="italic"
                fontSize="24px"
                mb=".25rem"
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
          <Image src="/images/desk.png" alt="Desk hero" />
        </Grid>

        <SectionTitle
          title="Supercharge Your Workspace Efficiency"
          subtitle="Features"
          mt="10rem"
        />
        <SectionTitle
          title="We Care About Your Health"
          subtitle="Accessiblity"
          mt="10rem"
        />
        <SectionTitle
          title="Elevate Your Workspace"
          subtitle="Technology"
          mt="10rem"
        />
        <SectionTitle
          title="An Overview"
          subtitle="Specifications"
          mt="10rem"
        />
        <Specifications />
      </MaxWidth>
      <Footer />
    </>
  );
}

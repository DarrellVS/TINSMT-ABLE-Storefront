import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import MaxWidth from "../MaxWidth";
import FooterColumn from "./FooterColumn";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <Box bg="#16161A" py="5rem">
      <MaxWidth>
        <Grid
          templateColumns={{ base: "auto", lg: "1fr 3fr" }}
          gap="1rem"
          alignItems="center"
        >
          <Image
            src="/images/logo/default.png"
            alt="logo"
            maxW="10rem"
            display={{
              base: "none",
              lg: "block",
            }}
          />
          <Grid
            templateColumns={{ base: "auto", lg: "repeat(3, 1fr)" }}
            gap="3rem"
          >
            <FooterColumn title="Support">
              <FooterItem
                items={[
                  { title: "Press", href: "/" },
                  { title: "Contact", href: "/" },
                  { title: "Partners", href: "/" },
                ]}
              />
            </FooterColumn>
            <FooterColumn title="Company">
              <FooterItem
                items={[
                  { title: "About Us", href: "/" },
                  { title: "Terms of Service", href: "/" },
                  { title: "Privacy Policy", href: "/" },
                ]}
              />
            </FooterColumn>
            <FooterColumn title="Socials">
              <FooterItem
                items={[
                  { title: "Facebook", href: "/" },
                  { title: "Twitter", href: "/" },
                  { title: "Instagram", href: "/" },
                  { title: "LinkedIn", href: "/" },
                ]}
              />
            </FooterColumn>
          </Grid>
        </Grid>
      </MaxWidth>
    </Box>
  );
}

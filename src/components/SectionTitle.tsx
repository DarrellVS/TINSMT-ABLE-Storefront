import { Flex, Text, Heading, FlexProps, Divider } from "@chakra-ui/react";
import React from "react";

interface Props {
  subtitle: string;
  title: string;
}

export default function SectionTitle({
  subtitle,
  title,
  ...rest
}: Props & FlexProps) {
  return (
    <>
      <Flex
        w="100%"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        direction="column"
        {...rest}
      >
        <Text
          fontWeight="light"
          letterSpacing=".75rem"
          textTransform="uppercase"
          fontSize={{ base: "12px", lg: "16px" }}
        >
          {subtitle}
        </Text>
        <Heading
          maxW="50rem"
          fontSize={{ base: "32px", lg: "52px" }}
          mt=".5rem"
        >
          {title}
        </Heading>
      </Flex>
      <Divider
        maxW="25%"
        mx="auto"
        my="4rem"
        mb="4.5rem"
        borderColor="gray.400"
      />
    </>
  );
}

import { Flex, Text, Heading, FlexProps } from "@chakra-ui/react";
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
    <Flex
      w="100%"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      direction="column"
      {...rest}
    >
      <Text fontWeight="light" letterSpacing=".75rem" textTransform="uppercase">
        {subtitle}
      </Text>
      <Heading maxW="50rem" fontSize="52px" mt=".5rem">
        {title}
      </Heading>
    </Flex>
  );
}

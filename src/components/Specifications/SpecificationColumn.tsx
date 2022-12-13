import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SpecificationColumn({ title, children }: Props) {
  return (
    <Flex direction="column">
      <Text
        fontWeight="bold"
        fontSize="26px"
        letterSpacing=".75rem"
        textTransform="uppercase"
        mb="1rem"
      >
        {title}
      </Text>
      {children}
    </Flex>
  );
}

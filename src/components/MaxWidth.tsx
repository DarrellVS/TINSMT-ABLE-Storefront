import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function MaxWidth({ children, ...rest }: Props & BoxProps) {
  return (
    <Box maxWidth="1280px" m="auto" {...rest}>
      {children}
    </Box>
  );
}

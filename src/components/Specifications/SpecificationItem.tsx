import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

export default function SpecificationItem({
  title,
  labels,
  isHighlighted,
}: {
  title: string;
  labels: string[];
  isHighlighted?: boolean;
}) {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      display={{ base: "flex", lg: "block" }}
      mt={{ base: ".5rem", lg: "1rem" }}
      justifyContent="space-between"
      bg={isHighlighted && isMobile ? "#F5F5F5" : "transparent"}
      {...(isHighlighted &&
        isMobile && {
          ml: "-5px",
          mr: "-5px",
          pl: "5px",
          pr: "5px",
        })}
    >
      <Text fontSize="20px" fontWeight="bold">
        {title}
      </Text>
      <Box
        textAlign={{ base: "right", lg: "left" }}
        mt={{ base: ".1rem", lg: "0" }}
        opacity="0.8"
      >
        {labels.map((label) => (
          <Text key={label} fontSize="18px" color="#1E1E1E">
            {label}
          </Text>
        ))}
      </Box>
    </Box>
  );
}

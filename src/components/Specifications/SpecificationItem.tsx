import { Box, Text } from "@chakra-ui/react";

export default function SpecificationItem({
  title,
  labels,
}: {
  title: string;
  labels: string[];
}) {
  return (
    <Box>
      <Text fontSize="20px" fontWeight="bold" mb=".25rem" mt="1rem">
        {title}
      </Text>
      {labels.map((label) => (
        <Text key={label} fontSize="18px" color="#1E1E1E">
          {label}
        </Text>
      ))}
    </Box>
  );
}

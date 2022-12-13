import { Box, Text } from "@chakra-ui/react";

export default function FooterItem({
  items,
}: {
  items: {
    title: string;
    href: string;
  }[];
}) {
  return (
    <Box>
      {items.map((item) => (
        <Text key={item.title} fontSize="18px" color="white" opacity="0.8">
          {item.title}
        </Text>
      ))}
    </Box>
  );
}

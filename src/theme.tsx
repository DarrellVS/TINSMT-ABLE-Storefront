import { extendTheme } from "@chakra-ui/react";

const textColor = "#3A3A3A";
const titleColor = "#323232";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  colors: {
    able: {
      100: "#d7bc94",
      200: "#d1b182",
      300: "#caa671",
      400: "#c49b5f",
      500: "#BD904D",
      600: "#aa8245",
      700: "#97733e",
      800: "#846536",
      900: "#71562e",
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Sofia Pro', sans-serif`,
  },
  components: {
    Text: {
      baseStyle: {
        color: textColor,
      },
    },
    Button: {
      variants: {
        cta: {
          px: "2.5rem",
          py: "1rem",
          h: "auto",
          bg: "able.500",
          color: "white",
          rounded: "10px",
          _hover: {
            bg: "able.600",
          },
          _active: {
            bg: "able.700",
          },
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Heading: {
      variants: {
        pageTitle: {
          fontSize: "80px",
          fontWeight: "extrabold",
          lineHeight: "86px",
          color: titleColor,
        },
      },
    },
  },
});

export default theme;

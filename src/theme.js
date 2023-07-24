import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/700.css";
import "@fontsource/unbounded/900.css";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Unbounded', sans-serif`,
    body: `'DM Sans', sans-serif`,
  },
  textStyles: {
    dm_sans: {
      fontFamily: "DM Sans",
      fontWeight: "400",
    },
    dm_sans_medium: {
      fontFamily: "DM Sans",
      fontWeight: "500",
    },
    dm_sans_bold: {
      fontFamily: "DM Sans",
      fontWeight: "700",
    },
    dm_sans_bold_italic: {
      fontFamily: "DM Sans",
      fontWeight: "700",
      fontStyle: "italic",
    },
    unbounded_light: {
      fontFamily: "Unbounded",
      fontWeight: "400",
    },
    unbounded: {
      fontFamily: "Unbounded",
      fontWeight: "500",
    },
    unbounded_bold: {
      fontFamily: "Unbounded",
      fontWeight: "700",
    },
    unbounded_black: {
      fontFamily: "Unbounded",
      fontWeight: "900",
    },
  },
});

export default theme;

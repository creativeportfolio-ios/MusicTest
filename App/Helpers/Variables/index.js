// @flow
import { Platform } from "react-native";
import dimensions from "./dimensions";

const headerHeight = Platform.OS === "ios" ? 65 : 54;

const padding = {
  small: 50,
  medium: 100,
  large: 150,
  xLarge: 200,
};

export default {
  headerHeight,
  footerHeight: 60,
  spacing: 16,
  padding: padding,
  fonts: {
    family: "Montserrat",
    medium: "Montserrat-Medium",
    thin: "Montserrat-Hairline",
    light: "Montserrat-Light",
    semiBold: "Montserrat-SemiBold",
  },
  fontSizes: {
    tiny: 11,
    small: 13,
    normal: 16,
    slarge: 18,
    large: 20,
    mlarge: 26,
    xlarge: 36,
    xxl: 48,
    xxxl: 72,
    giant: dimensions.x < 375 ? 62 : 80,
  },
  window: dimensions.window,
  colors: {
    navigation: {
      tabBar: {
        divider: "#FFFFFF10",
      },
    },
    background: {
      dark: "#200553",
      light: "#FFFFFF",
      settings: "#F1F1F1",
      import: "#F4F0F0",
    },
    header: {
      grey: "#4A4A4A",
    },
    border: {
      grey: "#CCCBCB90",
      alto: "#D6D6D6",
    },
    buttonTheme: {
      primary: "#54E6C9",
      secondary: "#063D92",
      register: "#5554E6",
      redeem: "#42207E",
      disabled: "#DADADA",
      none: 'transparent',
      red : '#FF0000',
    },
    mint: "#54E6C9",
    steel: "#F1F1F1",
    white: "white",
    black: "black",
    red: "red",
    lime: "#54E6C9",
    green: "#6C0",
    lightgreen: "lightgreen",
    grey: "grey",
    greyLighter: "#E9E9EE",
    greyDark: "#4A4A4A",
    blue: "#09C",
    darkblue: "darkblue",
    mercury: "#d5d2d1",
    bootstrap: {
      red: "#d9534f",
      white: "#f9f9f9",
      turquiose: "#5bc0de",
      green: "#5cb85c",
      blue: "#428bca",
    },
  }
};

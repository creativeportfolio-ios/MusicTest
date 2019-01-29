// @flow
import { Platform, Dimensions } from "react-native";

const window = Dimensions.get("window");

const x = window.width;
const y = window.height;

const headerHeight = Platform.OS === "ios" ? 65 : 54;
const footerHeight = 50;

export default {
  window,
  x,
  y,
  headerHeight,
  footerHeight
};

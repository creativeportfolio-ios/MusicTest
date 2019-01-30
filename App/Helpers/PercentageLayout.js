import dimensions from "./Variables/dimensions";

const MAX_PERCENT = 100;
const ONE_PERCENT = 0.01;
const EMPTY_VALUE = "0p";

const generateScale = (dimension) => {

  const scale = {};

  Array(MAX_PERCENT).fill(0).forEach(( _, i ) => {
    scale[`${i*1}p`] = dimension * i * ONE_PERCENT;
  });

  return scale;
}

const layoutScale = {
  x: generateScale(dimensions.x),
  y: generateScale(dimensions.y),
}

export default {
  //scale.x.25p -> the absolute pixel lengths
  verticalPixels: (percentage) => layoutScale.y[percentage || EMPTY_VALUE],
  horizontalPixels: (percentage) => layoutScale.x[percentage || EMPTY_VALUE],
}

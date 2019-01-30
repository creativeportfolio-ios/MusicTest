// @flow
import styled from "styled-components";
import PercentageLayout from 'MusicTest/App/Helpers/PercentageLayout';
import variables from "MusicTest/App/Helpers/Variables";

const { horizontalPixels, verticalPixels } = PercentageLayout;

const { colors, fonts, fontSizes } = variables;

const setTextColor = ({ color }) => {
  return colors[color] || colors.grey;
}

const setTextSize = ({ size }) => {
  return fontSizes[size] || fontSizes.normal;
}

const setPadding = ({ padding }) => {
  return horizontalPixels(padding) || 0;
}

const setTopPadding = ({ top }) => {
  return verticalPixels(top) || 0;
}

const setBottomPadding = ({ bottom }) => {
  return verticalPixels(bottom) || 0;
}

const setLeftPadding = ({ left }) => {
  return horizontalPixels(left) || 0;
}

const setAlignment = ({ align }) => {
  return align || "center";
}

export const Text = styled.Text`
  ${props => props.height && `height: ${props.height}`};
  ${props => props.left ?
    `margin-left: ${horizontalPixels(props.left)}` :
    (
    `align-self: center`,
    `text-align: center`
    )
  };
  ${props => props.right && `margin-right: ${horizontalPixels(props.right)}`};
  text-decoration-line: ${ props => props.underline ? "underline" : "none"};
  color: ${ props => setTextColor(props) };
  font-size: ${ props => setTextSize(props) };
  padding: ${ props => setPadding(props) }px;
  padding-top: ${ props => setTopPadding(props) }px;
  padding-bottom: ${ props => setBottomPadding(props) }px;
`;

export const Title = styled.Text`
  font-weight: bold;
  margin-top: 5;
  margin-bottom: 10;
  color: ${ props => setTextColor(props) };
  padding: ${ props => setPadding(props) }px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: ${ props => setTextColor(props) };
  padding: ${ props => setPadding(props) }px;
`;

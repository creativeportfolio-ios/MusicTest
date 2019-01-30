// @flow
import styled, { css } from 'styled-components';
import RNText from 'MusicTest/App/Components/Text';
import PercentageLayout from 'MusicTest/App/Helpers/PercentageLayout';
import variables from 'MusicTest/App/Helpers/Variables';

const { horizontalPixels, verticalPixels } = PercentageLayout;

const {
  colors: { buttonTheme, white, grey },
  fontSizes,
} = variables;

const getSpacing = (spacing = "8p") => horizontalPixels(spacing);

const getVertical = (margin = "2p") => verticalPixels(margin) || 0;

export const Container = styled.View`
  height: ${horizontalPixels("16p")}
  margin: 12px;
  margin-left: ${props => getSpacing(props.spacing)}px;
  margin-right: ${props => getSpacing(props.spacing)}px;
  margin-bottom: ${ props => getVertical(props.bottom)}px;
  margin-top: ${ props => getVertical(props.above)}px;
  padding: 12px;
  background-color: ${props => buttonTheme[props.theme] || buttonTheme.none};
  border-radius: 4px;
  justify-content: center;
`;

export const Text = styled(RNText)`
  color: ${props => props.none ? grey : white};
  font-size: ${fontSizes.normal};
`;

// @flow
import styled, { css } from "styled-components";
import variables from "MusicTest/App/Helpers/Variables";
import PercentageLayout from 'MusicTest/App/Helpers/PercentageLayout';

const { verticalPixels } = PercentageLayout;

const { colors } = variables;

const setBackgroundColor = ({ background }) => {
  return colors.background[background] || colors.background.dark;
}

export const FullView = styled.View`
  flex: 1
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${props => (props.header ? variables.headerHeight : 0)};
  margin-bottom: ${props => (props.footer ? variables.footerHeight : 0)};
  background-color: ${props => setBackgroundColor(props) };
`;

export const CenterView = styled.View`
  flex: ${props => (props.height || 1)};
  margin-top: ${props => verticalPixels(props.top) || 0};
  background-color: ${props => setBackgroundColor(props) };
`;

export const ScrollView = styled.ScrollView`
  margin-top: ${props => (props.header ? variables.headerHeight : 0)};
  margin-bottom: ${props => (props.footer ? variables.footerHeight : 0)};
  background-color: ${props => setBackgroundColor(props) };
`;

export const PaddedView = styled.View`
  padding: ${variables.spacing}px;
`;

export const MarginView = styled.View`
  margin-top: ${variables.headerHeight}px;
`;

export const EmptyView = styled.View`
  margin-top: ${props => verticalPixels(props.top) || 0};
`;

export const HorizontalView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${colors.border.grey};
  background-color: ${props => setBackgroundColor(props) };
  ${ props => props.borderTop && (
    `border-top-width: 1px`
  )}
  ${ props => props.borderBottom && (
    `border-bottom-width: 1px`
  )}
`;

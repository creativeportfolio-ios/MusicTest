// @flow
import * as React from "react";

import {
  FullView,
  CenterView,
  ScrollView,
  PaddedView,
  MarginView,
  HorizontalView,
  EmptyView,
} from "./styles";

type Props = {
  children: React.Node,
  style?: any,
};

function Full(props: Props): React.Node {
  const { children, style } = props;

  return <FullView {...props}>{children}</FullView>;
}

function Center(props: Props): React.Node {
  const { children, style } = props;

  return <CenterView style={style} {...props}>{children}</CenterView>;
}

function View(props: Props): React.Node {
  return <EmptyView {...props}>{props.children}</EmptyView>;
}

function Scroll(props: Props): React.Node {
  const { children, style } = props;

  return <ScrollView style={style} {...props}>{children}</ScrollView>;
}

function Padded(props: Props): React.Node {
  const { children, style } = props;

  return <PaddedView style={style}>{children}</PaddedView>;
}

function Margin(props: Props): React.Node {
  const { children, style } = props;

  return <MarginView style={style}>{children}</MarginView>;
}

function Horizontal(props: Props): React.Node {
  const { children, style } = props;

  return <HorizontalView style={style} {...props}>{children}</HorizontalView>;
}

const Layout: Object = {
  Full,
  Center,
  Scroll,
  Padded,
  Margin,
  Horizontal,
  View,
};

export default Layout;

// @flow
import * as React from "react";
import { Text as StyledText, Title, Bold } from "./styles";

type Props = {
  children: React.Node,
};

function Text(props: Props): React.Node {
  const { title, bold } = props;

  if (title) {
    return <Title {...props} />;
  }

  if (bold) {
    return <Bold {...props} />;
  }

  return <StyledText {...props} />;
}

export default Text;

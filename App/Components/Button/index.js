
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Text } from "./styles";

type Props = {
  onPress: Function,
  children: React.Node,
};

function Button(props: Props): React.Node {
  const { onPress, children, style, color } = props;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Container {...props}>
        <Text
          weight="medium"
          none={props.none}>{children}</Text>
      </Container>
    </TouchableOpacity>
  );
}

export default Button;

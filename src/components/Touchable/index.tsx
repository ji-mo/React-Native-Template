import {
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

export interface ITouchableProps
  extends TouchableWithoutFeedbackProps,
    TouchableOpacityProps,
    TouchableHighlightProps {
  type?: "TouchableOpacity" | "TouchableWithoutFeedback" | "TouchableHighlight";
}

const Touchable: React.FC<ITouchableProps> = ({ type = "TouchableOpacity", ...resetProps }) => {
  if (type === "TouchableWithoutFeedback") {
    return <TouchableWithoutFeedback {...resetProps} onPress={resetProps.onPress} />;
  }
  if (type === "TouchableHighlight") {
    return <TouchableHighlight {...resetProps} onPress={resetProps.onPress} />;
  }
  return <TouchableOpacity activeOpacity={0.7} {...resetProps} onPress={resetProps.onPress} />;
};

export default Touchable;

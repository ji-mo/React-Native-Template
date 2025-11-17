import { useState } from "react";
import { Pressable } from "react-native";
import { Icon } from "react-native-paper";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export interface IToggleHeartProps {
  defaultSelected: boolean;
  iconSource: string;
  selectedIconSource: string;
  iconColor: string;
  selectedIconColor: string;
  callBack: (s: boolean) => void;
}

export default function ToggleIcon({
  iconSource,
  selectedIconSource,
  iconColor,
  selectedIconColor,
  defaultSelected,
  callBack,
}: IToggleHeartProps) {
  const [selected, setSelected] = useState(defaultSelected);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = () => {
    scale.value = withTiming(1.4, { duration: 300 });
  };

  const onPressOut = () => {
    scale.value = withTiming(1, { duration: 300 });
  };

  const onPress = () => {
    // 切换状态
    callBack(selected);
    setSelected((prev) => !prev);
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
      <Animated.View style={animatedStyle}>
        <Icon
          source={selected ? selectedIconSource : iconSource}
          color={selected ? selectedIconColor : iconColor}
          size={16}
        />
      </Animated.View>
    </Pressable>
  );
}

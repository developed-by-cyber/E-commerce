import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors } from "@/constant";

type Props = {
  buttonTitle: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
};

const CustomButton = ({
  buttonTitle,
  onPress,
  disabled,
  style,
  color,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressable,
        { opacity: pressed || disabled ? 0.5 : 1 },
        style,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={[styles.title, { color }]}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  pressable: {
    height: 55,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.yellow,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.dark,
  },
});

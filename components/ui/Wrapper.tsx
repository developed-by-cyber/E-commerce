import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";
import { colors } from "@/constant";

type props = {
  style?: StyleProp<ViewStyle>;
};
const Wrapper = ({ children, style }: PropsWithChildren<props>) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { colors } from "@/constant";

const Wrapper = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20
  },
});

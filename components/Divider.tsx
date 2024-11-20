import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/constant";

const Divider = () => {
  return <View style={styles.line}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  line: {
    width: "100%",
    marginTop: 5,
    height: 1,
    backgroundColor: colors.lightGray,
  },
});

import { View, ActivityIndicator, Image } from "react-native";
import React from "react";
import { colors } from "@/constant";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.white,
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/loading-cart.gif")}
        style={{ width: 75, marginRight: 20 }}
        resizeMode="contain"
      />
      {/* <ActivityIndicator size="large" color={colors.yellow} /> */}
    </View>
  );
};

export default Loading;

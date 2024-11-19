import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  num: number;
};

const Star = ({ num }: Props) => {
  let star = [];
  for (let i = 0; i < 5; i++) {
    if (i < num) {
      star.push(
        <FontAwesome key={i} name="star" size={13.5} color="#F6B01E" />
      );
    } else {
      star.push(
        <FontAwesome key={i} name="star" size={13.5} color="#B1B0AB" />
      );
    }
  }
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
      }}
    >
      {star}
    </View>
  );
};

export default Star;

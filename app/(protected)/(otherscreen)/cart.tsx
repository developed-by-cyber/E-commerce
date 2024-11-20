import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "@/components/ui/Wrapper";
import Cart from "@/components/Cart";

type Props = {};

const cart = (props: Props) => {
  return (
    <Wrapper
      style={{
        backgroundColor: "#F1F1F2",
        paddingHorizontal: 10,
        position: "relative",
      }}
    >
      <Cart />
    </Wrapper>
  );
};

export default cart;

const styles = StyleSheet.create({});

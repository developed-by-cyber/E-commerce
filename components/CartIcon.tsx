import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/constant";
import { useCartStore } from "@/libs/zustand/cart";
import { usePathname, useRouter } from "expo-router";

type Props = {};
const onPress = () => {};
const CartIcon = (props: Props) => {
  const carItemLength = useCartStore((state) => state.items.length);
  const router = useRouter();
  const pathname = usePathname();
  const isCartScreen = pathname === "/cart";
  const onPress = () => {
    if (isCartScreen) return;
    router.push("/cart");
  };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.press, { opacity: pressed ? 0.5 : 1 }]}
    >
      <AntDesign name="shoppingcart" color="white" size={25} />
      <View style={styles.abs}>
        <Text
          style={{
            color: colors.white,
            fontSize: 13.5,
            fontFamily: "Poppins-SemiBold",
          }}
        >
          {carItemLength}
        </Text>
      </View>
    </Pressable>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  press: {
    backgroundColor: colors.gray,
    height: 40,
    width: 40,
    padding: 5,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  abs: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: colors.yellow,
    height: 20,
    width: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

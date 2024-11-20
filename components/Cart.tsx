import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useCallback } from "react";
import CartItem from "./CartItem";
import { useCartStore } from "@/libs/zustand/cart";
import Divider from "./Divider";
import { colors } from "@/constant";
import CustomButton from "./ui/CustomButton";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  const cartItems = useCartStore((state) => state.items);
  const totalItem = cartItems.length;
  const subTotal = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  const { width } = Dimensions.get("window");
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        ListHeaderComponent={() => (
          <ListHeader subTotal={subTotal} totalItem={totalItem} />
        )}
        ListFooterComponent={() => <ListFooter subtotal={subTotal} />}
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, flexGrow: 1, paddingHorizontal: 10 }}
        ListEmptyComponent={EmptyComponent}
        ListFooterComponentStyle={{ marginTop: "auto", marginBottom: 30 }}
      />
    </View>
  );
};

export default Cart;
type HeaderProp = {
  totalItem: number;
  subTotal: number;
};
const ListHeader = ({ totalItem, subTotal }: HeaderProp) => {
  return (
    <View style={{ marginTop: 20, gap: 10 }}>
      <Text style={styles.summary}>CART SUMMARY</Text>
      <Divider />
      <View style={styles.subTotal}>
        <Text>Subtotal</Text>
        <Text style={styles.subtotalamount}>${subTotal.toFixed(2)}</Text>
      </View>
      <Text style={styles.summary}>Cart ({totalItem})</Text>
    </View>
  );
};

const EmptyComponent = () => {
  const router = useRouter();
  const onPress = () => {
    router.push("/");
  };
  return (
    <View style={{ gap: 10 }}>
      <Text style={styles.title}>No item in the cart</Text>
      <CustomButton
        buttonTitle="Continue shopping"
        onPress={onPress}
        color="white"
      />
    </View>
  );
};
const ListFooter = ({ subtotal }: { subtotal: number }) => {
  return (
    <View style={{ flexDirection: "row", gap: 20 }}>
      <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name="phone" size={25} color={colors.yellow} />
      </TouchableOpacity>
      <CustomButton
        buttonTitle={`Checkout ($${subtotal.toFixed(2)})`}
        onPress={() => {}}
        color="white"
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtotalamount: {
    fontWeight: "bold",
  },
  summary: { fontWeight: "300", color: "grey" },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.yellow,
    padding: 10,
  },
});

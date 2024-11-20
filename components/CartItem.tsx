import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CartItem as CartItemType } from "@/type";
import { Image } from "expo-image";
import { toast } from "sonner-native";
import { useCartStore } from "@/libs/zustand/cart";
import { colors } from "@/constant";
[];
import { UpdateButtons } from "./ui/UpdateButton";

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={{ width: 100, height: 100 }}
            source={item.img}
            contentFit="cover"
            placeholder={require("@/assets/images/skeleton-loader.gif")}
            placeholderContentFit="cover"
          />
        </View>
        <View style={styles.right}>
          <Text>{item.title}</Text>
          <Text>${item.price.toFixed(2)}</Text>
          <Text>Brand: {item.brand}</Text>
          <Text>{item.stock} in stock</Text>
        </View>
      </View>
      <Controls item={item} />
    </View>
  );
};

export default CartItem;

const Controls = ({ item }: { item: CartItemType }) => {
  const increase = useCartStore((state) => state.addItem);
  const decrease = useCartStore((state) => state.removeItem);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const onIncrease = () => {
    toast.success("Cart has been updated");
    increase(item);
  };
  const onDecrease = () => {
    toast.success("Cart has been updated");
    decrease(item.id);
  };
  const disableIncrease = item.qty === item.stock;
  const disableDecrease = item.qty === 1;
  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={() => deleteFromCart(item.id)}>
        <Text style={styles.remove}>Remove</Text>
      </TouchableOpacity>
      <UpdateButtons
        qtyInCart={item.qty}
        disableIncrease={disableIncrease}
        disableDecrease={disableDecrease}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        small
      />
    </View>
  );
};

const styles = StyleSheet.create({
  left: {
    padding: 3,
  },
  right: {
    gap: 10,
  },
  container: { flexDirection: "row", gap: 10 },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  remove: {
    color: colors.yellow,
  },
  outerContainer: {
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});

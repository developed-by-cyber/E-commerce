import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constant";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import CustomButton from "./ui/CustomButton";
import { ProductResponse } from "@/type";
import { useCartStore } from "@/libs/zustand/cart";
import { useRouter } from "expo-router";
import { toast } from "sonner-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UpdateButtons } from "./ui/UpdateButton";
type Props = {
  item: ProductResponse;
  stock: number;
};
const Footer = ({ item, stock }: Props) => {
  const addToCart = useCartStore((state) => state.addItem);
  const qtyInCart =
    useCartStore((state) => state.items.find((i) => i.id === item.id))?.qty ||
    0;
  const removeFromCart = useCartStore((state) => state.removeItem);
  const router = useRouter();
  const onPress = () => {
    router.push("/");
  };
  const onAddItem = () => {
    if (qtyInCart === stock)
      return toast.error("Product is out of stock", {
        description: "Can not add more than available Stock",
      });

    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: 1,
      img: item.thumbnail,
      stock: item.stock,
      brand: item.brand,
    });
    toast.success("Cart has been updated");
  };
  const onRemoveFromCart = () => {
    if (qtyInCart === 0) return;
    removeFromCart(item.id);
    toast.success("Cart has been updated");
  };
  const renderControlButton = qtyInCart > 0;
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Pressable onPress={onPress} style={styles.iconWrap}>
          <AntDesign name="home" size={20} color={colors.yellow} />
        </Pressable>
        <Pressable style={styles.iconWrap}>
          <FontAwesome
            name="phone"
            size={20}
            color={colors.yellow}
            style={{ paddingHorizontal: 3 }}
          />
        </Pressable>
        {renderControlButton && (
          <UpdateButtons
            qtyInCart={qtyInCart}
            onIncrease={onAddItem}
            onDecrease={onRemoveFromCart}
          />
          // <View style={styles.controls}>
          //   <Pressable style={styles.iconStyle} onPress={onRemoveFromCart}>
          //     <AntDesign name="minus" color={colors.white} size={30} />
          //   </Pressable>
          //   <Text>{qtyInCart}</Text>
          //   <Pressable onPress={onAddItem} style={styles.iconStyle}>
          //     <AntDesign name="plus" color={colors.white} size={30} />
          //   </Pressable>
          // </View>
        )}
        {!renderControlButton && (
          <Pressable
            disabled={stock === 0}
            style={styles.addButton}
            onPress={onAddItem}
          >
            <MaterialIcons
              style={{ position: "absolute", left: 17 }}
              name="add-shopping-cart"
              color="white"
              size={25}
            />
            <Text style={styles.btnText}>Add To Cart</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "9%",
    backgroundColor: "#F1F1F2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 }, // Shadow offset to push the shadow to the top
    shadowOpacity: 0.15, // Adjust shadow opacity
    shadowRadius: 2, // Adjust the spread of the shadow
    elevation: 5,
  },
  tab: {
    backgroundColor: colors.white,
    height: "100%",
    // width: "100%",
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  iconWrap: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.yellow,
    borderRadius: 5,
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  addButton: {
    flex: 1,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 6,
    flexDirection: "row",
    position: "relative",
  },
  btnText: {
    color: colors.white,
    fontFamily: "Cabin-Medium",
    fontSize: 20,
  },
  controls: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconStyle: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.yellow,
    alignItems: "center",
    justifyContent: "center",
  },
});

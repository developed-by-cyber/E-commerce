import { Pressable, StyleSheet, Text, View } from "react-native";
import { ProductResponse } from "@/type";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { trimText } from "@/utils";
import { colors } from "@/constant";
type Props = {
  product: ProductResponse;
  index?: number;
  width?: number;
  height?: number;
};

const ProductCard = ({ index = 0, product, width, height }: Props) => {
  const router = useRouter();
  const onPress = () => {
    router.push(`/product/${product.id}`);
  };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          marginRight: index % 2 === 0 ? 15 : 0,
          // marginLeft: index % 1 === 0 ? 10 : 0,
          marginBottom: 15,
          opacity: pressed ? 0.1 : 1,
          width,
          height: height ? height : 270,
        },
      ]}
    >
      <View style={[styles.imageContainer, { backgroundColor: "#EBECEC" }]}>
        <Image
          source={{ uri: product.images[0] }}
          contentFit="cover"
          placeholder={require("@/assets/images/skeleton-loader.gif")}
          style={styles.image}
        />
      </View>
      <View style={{ gap: 8 }}>
        <Text style={styles.title}>{trimText(product.title)}</Text>
        <Text style={{ fontFamily: "Poppins" }}>{product.category}</Text>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: height ? 25 : 25,
            color: colors.yellow,
          }}
        >
          ${product.price}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flex: 1,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    borderRadius: 5,
    height: 320,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Poppins",
    fontSize: 17.4,
  },
});

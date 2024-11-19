import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import ProductCard from "./ProductCard";

import { ProductResponse } from "@/type";
import { colors } from "@/constant";

type Props = {
  product: ProductResponse[];
};

const SmiliarProduct = ({ product }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ gap: 20 }}>
      <Text style={styles.descriptionTitle}>You may also like</Text>
      <FlatList
        horizontal
        data={product}
        renderItem={({ item }) => (
          <ProductCard product={item} width={width * 0.6} height={300} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SmiliarProduct;

const styles = StyleSheet.create({
  descriptionTitle: {
    fontFamily: "Cabin-Medium",
    fontSize: 21,
    color: colors.dark,
  },
});

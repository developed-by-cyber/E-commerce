import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductResponse } from "@/type";
import { FlashList } from "@shopify/flash-list";
import ProductCard from "./ProductCard";

type Props = {
  data: ProductResponse[];
};
const ItemSeparator = () => <View style={styles.separator} />;
const Product = ({ data }: Props) => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlashList
        data={data}
        estimatedItemSize={200}
        renderItem={({ item, index }) => (
          <ProductCard product={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  separator: {
    height: 40, // Adjust this value for the gap size
  },
});

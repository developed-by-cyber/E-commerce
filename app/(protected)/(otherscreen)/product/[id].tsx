import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Wrapper from "@/components/ui/Wrapper";
import {
  useGetSimilarProducts,
  useGetSingleProducts,
} from "@/libs/tanstack/queries";
import { Image } from "expo-image";
import { colors } from "@/constant";
import ErrorComponent from "@/components/ui/ErrorComponent";
import Loading from "@/components/ui/Loading";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import Footer from "@/components/Footer";
import Star from "@/components/Star";
import SmiliarProduct from "@/components/SmiliarProduct";
import ProductDetail from "@/components/ProductDetail";

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isError, refetch, isPending } = useGetSingleProducts(id);

  const {
    data: similar,
    isPending: isPendingSimilar,
    isError: isErrorSimilar,
    refetch: refetchSimilar,
  } = useGetSimilarProducts(data?.category!);

  const filterSimilarProduct = useMemo(() => {
    if (!data) return [];
    return (
      similar?.products.filter((product) => product.id === product.id) || []
    );
  }, [data?.id, similar?.products]);
  const handleRefetch = () => {
    refetch();
    refetchSimilar();
  };
  if (isError || isErrorSimilar)
    return <ErrorComponent onRefetch={handleRefetch} />;

  if (isPending || isPendingSimilar) return <Loading />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper
        style={{
          backgroundColor: "#F1F1F2",
          paddingHorizontal: 0,
          position: "relative",
        }}
      >
        <ProductDetail product={data} similar={filterSimilarProduct} />
        <Footer item={data} stock={data.stock} />
      </Wrapper>
    </SafeAreaView>
  );
};
export default ProductDetails;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 10,
    backgroundColor: colors.white,
    height: 320,
    borderRadius: 5,
    marginHorizontal: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: 22,
    color: colors.dark,
    fontFamily: "Poppins",
  },
  brand: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  brandText: {
    fontSize: 17,
    fontFamily: "Syne",
  },
  price: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 30,
    color: colors.dark,
  },
  discountText: {
    fontSize: 21,
    color: colors.gray,
    opacity: 0.6,
    fontFamily: "Poppins",
    textDecorationLine: "line-through",
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 6,
  },
  discount: {
    fontFamily: "Poppins-Bold",
    color: colors.yellow,
    backgroundColor: "#FEF3E9",
    alignSelf: "flex-start",
    paddingHorizontal: 4,
    fontSize: 14,
    paddingVertical: 2,
    borderRadius: 5,
    marginTop: 6.5,
  },
  inStock: {
    fontFamily: "Poppins",
    marginTop: 0,
    color: colors.gray,
  },
  shipping: {
    fontFamily: "Poppins",
    color: colors.dark,
    fontSize: 15,
    marginTop: 15,
  },
  descriptionTitle: {
    fontFamily: "Cabin-Medium",
    fontSize: 21,
    color: colors.dark,
  },
  line: {
    width: "100%",
    marginTop: 10,
    height: 0.6,
    backgroundColor: colors.lightGray,
  },
  description: {
    fontFamily: "Poppins",
    marginTop: 10,
    fontSize: 16,
  },
  iconWrap: {
    padding: 7,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 3,
  },
  policyHeader: {
    fontFamily: "Cabin",
    color: colors.dark,
    fontSize: 18,
  },
  policy: {
    fontFamily: "Syne",
    fontSize: 15.5,
    color: colors.dark,
  },
  reviewContainer: {
    marginTop: 12,
    gap: 20,
  },
  review: {
    gap: 12,
  },
  comment: {
    fontFamily: "Cabin-Medium",
    fontSize: 18,
    opacity: 0.8,
  },
  name: {
    fontFamily: "Syne",
    color: colors.gray,
    fontSize: 16,
  },
  reviewDate: {
    fontFamily: "Poppins",
    fontSize: 16,
    color: colors.gray,
  },
  stockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  stock: {
    fontFamily: "Poppins",
    color: colors.dark,
    fontSize: 15,
  },
  progress: {
    flex: 1,
    height: 7,
    borderRadius: 20,
    backgroundColor: "#C7C7CD",
    overflow: "hidden",
  },
  progressBar: {
    backgroundColor: colors.yellow,
    height: "100%",
  },
});

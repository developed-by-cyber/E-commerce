import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import { colors } from "@/constant";
import SmiliarProduct from "./SmiliarProduct";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import Star from "./Star";
import Product from "./Product";
import { ProductResponse } from "@/type";
import { Image } from "expo-image";
import Slider from "./Slider";

type Props = {
  product: ProductResponse;
  similar: ProductResponse[];
};

const ProductDetail = ({ product, similar }: Props) => {
  const price = product.price * (product.discountPercentage / 100);
  const discountPrice = (product.price - price).toFixed(2);
  const stockColor = product.stock < 15 ? "red" : colors.yellow;
  const imageQuantity = product.images.length > 1 ? 330 : 393;
  const isDiscount = product.discountPercentage > 0;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginBottom: 90 }}>
        <Slider images={product.images} />

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product?.title}</Text>
          <View style={styles.brand}>
            <Text style={styles.brandText}>
              Brand: <Text style={{ color: "#2668C5" }}>{product?.brand}</Text>
            </Text>
            <Text style={[styles.brandText, { opacity: 0.7 }]}>|</Text>
            <Text style={[styles.brandText, { color: "#2668C5" }]}>
              Similar products from {product?.brand}
            </Text>
          </View>
          <View style={styles.discountContainer}>
            <Text style={styles.price}>${product?.price}</Text>
            {isDiscount && (
              <Text style={styles.discountText}>${discountPrice}</Text>
            )}
            <Text style={styles.discount}>
              -{Math.floor(product?.discountPercentage)}%
            </Text>
          </View>
          <Text style={styles.inStock}>{product?.availabilityStatus}</Text>
          <View style={styles.stockContainer}>
            <Text style={styles.stock}>{product.stock} items left</Text>
            <View style={styles.progress}>
              <View
                style={[
                  styles.progressBar,
                  {
                    width: `${product.stock}%`,
                    backgroundColor: stockColor,
                  },
                ]}
              />
            </View>
          </View>
          <Text style={styles.shipping}>{product?.shippingInformation}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <FontAwesome name="star" size={13} color="#F6B01E" />
                <FontAwesome name="star" size={13} color="#F6B01E" />
                <FontAwesome name="star" size={13} color="#F6B01E" />
                <FontAwesome name="star" size={13} color="#F6B01E" />
                <FontAwesome name="star-half-full" size={15} color="#F6B01E" />
              </View>
              <Text
                style={[
                  styles.brandText,
                  {
                    color: "#2668C5",
                    fontFamily: "Poppins",
                    fontSize: 15.5,
                  },
                ]}
              >
                {product?.reviews.length} ratings
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 25,
                alignItems: "center",
              }}
            >
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <AntDesign name="sharealt" color={colors.yellow} size={24} />
              </Pressable>
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <AntDesign name="hearto" color={colors.yellow} size={24} />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.detailsContainer, { marginTop: 10 }]}>
          <Text style={styles.descriptionTitle}>Delivery and Return info</Text>
          <View style={styles.line}></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 15,
            }}
          >
            <View style={styles.iconWrap}>
              <FontAwesome name="rotate-left" size={24} color={colors.dark} />
            </View>
            <View>
              <Text style={styles.policyHeader}>{product.returnPolicy}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 15,
            }}
          >
            <View style={styles.iconWrap}>
              <Feather name="truck" size={25} color={colors.dark} />
            </View>
            <View>
              <Text style={styles.policyHeader}>
                {product.shippingInformation}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 15,
            }}
          >
            <View style={styles.iconWrap}>
              <FontAwesome name="thumbs-o-up" size={25} color={colors.dark} />
            </View>
            <View>
              <Text style={styles.policyHeader}>
                {product.warrantyInformation}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.detailsContainer, { marginTop: 10 }]}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <View style={styles.line}></View>
          <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={styles.description}
          >
            {product?.description}
          </Text>
        </View>
        <View
          style={[styles.detailsContainer, { marginTop: 10, paddingBottom: 0 }]}
        >
          <Text style={styles.descriptionTitle}>Product Rating & Reviews</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 11,
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins-SemiBold",
                paddingHorizontal: 5,
                borderColor: colors.yellow,
                borderWidth: 1,
                color: colors.yellow,
                borderRadius: 4,
              }}
            >
              3.5/5
            </Text>
            <Text
              style={[
                styles.brandText,
                {
                  fontFamily: "Poppins",
                  fontSize: 15.5,
                },
              ]}
            >
              {product?.reviews.length} ratings
            </Text>
          </View>
          <View style={styles.line}></View>

          <View style={[styles.reviewContainer]}>
            {product.reviews.map((review, index) => (
              <View style={styles.review} key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Star num={review.rating} />
                  <Text style={styles.reviewDate}>
                    {new Date(review.date).toLocaleDateString()}
                  </Text>
                </View>
                <Text style={styles.comment}>{review.comment}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <Text style={styles.name}>by {review.reviewerName}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 3,
                      alignItems: "center",
                    }}
                  >
                    <Feather name="check-circle" size={15.5} color="#6DBD28" />
                    <Text
                      style={[styles.name, { color: "#6DBD28", fontSize: 17 }]}
                    >
                      Verified Purchase
                    </Text>
                  </View>
                </View>
                <View style={styles.line}></View>
              </View>
            ))}
          </View>
        </View>
        <View style={[styles.detailsContainer, { marginTop: 10 }]}>
          <SmiliarProduct product={similar} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

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
    fontSize: 20,
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

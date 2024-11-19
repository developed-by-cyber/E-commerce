import { colors } from "@/constant";
import { Image } from "expo-image";
import Carousel from "pinar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
type Props = {
  images: string[];
};
const { height } = Dimensions.get("window");
const Slider = ({ images }: Props) => {
  return (
    <Carousel
      style={{ height: height * 0.4 }}
      showsDots={false}
      loop
      autoplay
      showsControls={false}
    >
      {images.map((img, index) => {
        return (
          <View key={index} style={styles.imageContainer}>
            <View>
              <Image
                style={[
                  styles.image,
                  // { width: imageQuantity }
                ]}
                source={{ uri: img }}
                contentFit="contain"
                placeholder={require("@/assets/images/skeleton-loader.gif")}
              />
            </View>
          </View>
        );
      })}
    </Carousel>
  );
};

export default Slider;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 10,
    backgroundColor: colors.white,
    height: 338,
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
});

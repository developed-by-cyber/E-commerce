import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const onPress = () => {
    router.push("/login");
  };
  return (
    <View>
      <Button title="login" onPress={onPress} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

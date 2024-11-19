import { View, Text, StatusBar, Pressable } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/constant";

const OtherScreenLayout = () => {
  const router = useRouter();
  const onPress = () => {
    router.back();
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.white },
          headerTintColor: colors.dark,
          headerTitle: "Details",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Pressable
              onPress={onPress}
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          ),
        }}
      />
    </>
  );
};

export default OtherScreenLayout;

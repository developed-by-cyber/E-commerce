import CartIcon from "@/components/CartIcon";
import TabsIcon from "@/components/TabsIcon";
import { colors } from "@/constant";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "react-native";

export default function TabsLayout() {
  return (
    //@ts-ignore
    <>
      <StatusBar barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.yellow,
          headerTintColor: colors.yellow,
          headerStyle: { backgroundColor: colors.dark },
          headerRight: () => <CartIcon />,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="home" focused={focused} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: "",
            tabBarLabel: "Menu",
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="bars" focused={focused} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "",
            tabBarLabel: "More",
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="amazon" focused={focused} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "",
            tabBarLabel: "Account",
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon name="user" focused={focused} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

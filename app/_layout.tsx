import { Stack } from "expo-router";
import { Toaster } from "sonner-native";
import { useFonts } from "expo-font";
import * as SplashScreen  from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
const [loaded] = useFonts({
  Poppins: require("./../assets/fonts/Poppins-Regular.ttf"),
  PoppinsBold: require("./../assets/fonts/Poppins-Bold.ttf"),
  Syne: require("./../assets/fonts/Syne-Regular.ttf"),
  Harma: require("./../assets/fonts/Harmattan-Regular.ttf"),
  Cabin: require("./../assets/fonts/Cabin-Regular.ttf"),
  CabinBold: require("./../assets/fonts/Cabin-Bold.ttf"),
});
useEffect(() => {
  if(loaded){
    SplashScreen.hideAsync();
  }
}, [loaded])
if(!loaded) {
  return null;
}
  return (
    //@ts-ignore
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <Toaster />
    </>
  );
}

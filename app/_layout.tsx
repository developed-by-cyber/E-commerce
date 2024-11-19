import { Stack } from "expo-router";
import { Toaster } from "sonner-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require("./../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./../assets/fonts/Poppins-Bold.ttf"),
    Syne: require("./../assets/fonts/Syne-Regular.ttf"),
    Harma: require("./../assets/fonts/Harmattan-Regular.ttf"),
    Cabin: require("./../assets/fonts/Cabin-Regular.ttf"),
    CabinMedium: require("./../assets/fonts/Cabin-Medium.ttf"),
    CabinBold: require("./../assets/fonts/Cabin-Bold.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }
  return (
    //@ts-ignore
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </QueryClientProvider>
        <Toaster />
      </GestureHandlerRootView>
    </>
  );
}

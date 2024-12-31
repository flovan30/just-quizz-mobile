import useAppReady from "@/hooks/useAppReady";
import useSplashScreen from "@/hooks/useSplashScreen";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "../styles/global.css";
import AnimatedSplashScreen from "./splash";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsReady, lottieReady] = useAppReady();
  const [animationIsFinished, setAnimationIsFinished] = useSplashScreen();

  if (!lottieReady) {
    return null;
  }

  if (!fontsReady || !animationIsFinished) {
    SplashScreen.hideAsync();
    return (
      <AnimatedSplashScreen
        onAnimationFinish={() => setAnimationIsFinished(true)}
      />
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
        <Stack.Screen name="terms" options={{ presentation: "modal" }} />
        <Stack.Screen name="privacy" options={{ presentation: "modal" }} />
      </Stack>
    </>
  );
}

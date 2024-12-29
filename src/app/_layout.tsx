import useAppReady from "@/hooks/useAppReady";
import useSplashScreen from "@/hooks/useSplashScreen";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
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
      <StatusBar style="inverted" />
      <Slot />
    </>
  );
}

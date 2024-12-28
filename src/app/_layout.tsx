import useAppReady from "@/hooks/useAppReady";
import useSplashScreen from "@/hooks/useSplashScreen";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../styles/global.css";
import AnimatedSplashScreen from "./splash";

export default function RootLayout() {
  const appReady = useAppReady();
  const [animationIsFinished, setAnimationIsFinished] = useSplashScreen();

  if (!appReady || !animationIsFinished) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={() => setAnimationIsFinished(true)}
      />
    );
  }

  return (
    <>
      <StatusBar style="inverted" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

const useAppReady = (): [boolean, boolean] => {
  const [fontsReady, setFontsReady] = useState(false);
  const [lottieReady, setLottieReady] = useState(false);

  const [fontLoaded, fontError] = useFonts({
    "Gluten-Bold": require("@assets/fonts/Gluten-Bold.ttf"),
    "Gluten-Medium": require("@assets/fonts/Gluten-Medium.ttf"),
    "Rubik-Bold": require("@assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium": require("@assets/fonts/Rubik-Medium.ttf"),
  });

  useEffect(() => {
    try {
      require("@assets/animations/brain-lottie.json");
      setLottieReady(true);
    } catch (error) {
      console.error("Erreur lors de l'accès à l'animation Lottie :", error);
    }
  }, []);

  useEffect(() => {
    if (fontLoaded || fontError) {
      setFontsReady(true);
    }
  }, [fontLoaded, fontError]);

  return [fontsReady, lottieReady];
};

export default useAppReady;

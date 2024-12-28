import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

const useAppReady = (): boolean => {
  const [isReady, setIsReady] = useState<boolean>(false);

  const [fontLoaded, fontError] = useFonts({
    "Gluten-Bold": require("@assets/fonts/Gluten-Bold.ttf"),
    "Gluten-Medium": require("@assets/fonts/Gluten-Medium.ttf"),
    "Rubik-Bold": require("@assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium": require("@assets/fonts/Rubik-Medium.ttf"),
  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      setIsReady(true);
    }
  }, [fontLoaded, fontError]);

  return isReady;
};

export default useAppReady;

import { useState } from "react";

const useSplashScreen = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [splashAnnimationFinished, setSplashAnnimationFinished] =
    useState(false);

  return [splashAnnimationFinished, setSplashAnnimationFinished];
};

export default useSplashScreen;

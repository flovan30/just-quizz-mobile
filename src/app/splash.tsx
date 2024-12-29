import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { View } from "react-native";

const AnimatedSplashScreen = ({
  onAnimationFinish = () => {},
}: {
  onAnimationFinish: () => void;
}) => {
  return (
    <>
      <StatusBar style="inverted" />
      <View className="flex-1 items-center justify-center bg-custom-black">
        <LottieView
          source={require("@assets/animations/brain-lottie.json")}
          autoPlay
          loop={false}
          style={{ width: 400, height: 400 }}
          onAnimationFinish={() => onAnimationFinish()}
        />
      </View>
    </>
  );
};

export default AnimatedSplashScreen;

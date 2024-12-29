import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const WelcomeScreen = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.CUSTOM_BLACK} style="inverted" />
      <SafeAreaView className="flex-1">
        {/* header */}
        <View>
          <View className="bg-custom-black gap-4 p-4">
            <Text className="font-GlutenBold text-6xl text-custom-white text-center">
              Welcome
            </Text>
            <Text className="font-GlutenBold text-4xl text-custom-white text-center">
              to
            </Text>
            <Text className="font-GlutenBold text-6xl text-center">
              <Text className="text-custom-white">Just </Text>
              <Text className="text-custom-green">Quizz</Text>
            </Text>
          </View>

          <Svg
            width={"100%"}
            style={{ aspectRatio: 1440 / 320 }}
            viewBox="0 0 1440 320"
          >
            <Path
              fill={Colors.CUSTOM_BLACK}
              d="M0,160L18.5,149.3C36.9,139,74,117,111,96C147.7,75,185,53,222,48C258.5,43,295,53,332,96C369.2,139,406,213,443,213.3C480,213,517,139,554,138.7C590.8,139,628,213,665,213.3C701.5,213,738,139,775,122.7C812.3,107,849,149,886,181.3C923.1,213,960,235,997,213.3C1033.8,192,1071,128,1108,112C1144.6,96,1182,128,1218,160C1255.4,192,1292,224,1329,229.3C1366.2,235,1403,213,1422,202.7L1440,192L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
            />
          </Svg>
        </View>
        {/* buttons */}
        <View className=""></View>
        {/* bottom wave */}
        <View className="absolute bottom-0 left-0"></View>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;

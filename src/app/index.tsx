import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const WelcomeScreen = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.CUSTOM_BLACK} style="inverted" />
      <SafeAreaView className="flex-col grow justify-between">
        {/* header */}
        <View>
          <View className="bg-custom-black gap-4 py-6">
            <Text className="font-GlutenBold text-7xl text-custom-white text-center">
              Welcome
            </Text>
            <Text className="font-GlutenBold text-4xl text-custom-white text-center">
              to
            </Text>
            <Text className="font-GlutenBold text-7xl text-center">
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
              d="M0,224L24,234.7C48,245,96,267,144,250.7C192,235,240,181,288,186.7C336,192,384,256,432,245.3C480,235,528,149,576,144C624,139,672,213,720,208C768,203,816,117,864,101.3C912,85,960,139,1008,176C1056,213,1104,235,1152,229.3C1200,224,1248,192,1296,186.7C1344,181,1392,203,1416,213.3L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            />
          </Svg>
        </View>
        {/* buttons */}
        <View className="items-center justify-center gap-12 my-14">
          <Link href="/" asChild>
            <Button backgroundColor="bg-custom-green" text="S'inscrire" />
          </Link>
          <Link href="/" asChild>
            <Button backgroundColor="bg-custom-blue" text="Se connecter" />
          </Link>
        </View>

        {/* bottom wave */}
        <View>
          <Svg
            width={"100%"}
            style={{ aspectRatio: 1440 / 320 }}
            viewBox="0 0 1440 320"
          >
            <Path
              fill={Colors.CUSTOM_BLACK}
              d="M0,128L24,133.3C48,139,96,149,144,176C192,203,240,245,288,234.7C336,224,384,160,432,154.7C480,149,528,203,576,197.3C624,192,672,128,720,96C768,64,816,64,864,106.7C912,149,960,235,1008,261.3C1056,288,1104,256,1152,218.7C1200,181,1248,139,1296,128C1344,117,1392,139,1416,149.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            />
          </Svg>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;

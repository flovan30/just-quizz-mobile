import Button from "@/components/Button";
import InputForm from "@/components/InputForm";
import Colors from "@/constants/Colors";
import useRegisterForm from "@/hooks/useRegisterForm";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Controller } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const RegisterPage = () => {
  const { control, handleSubmit, onSubmit } = useRegisterForm();

  return (
    <>
      <StatusBar backgroundColor={Colors.CUSTOM_BLACK} style="inverted" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <SafeAreaView className="flex-1 flex-col justify-between">
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View>
              <View className="bg-custom-black py-10">
                <Text className="font-GlutenBold text-7xl text-custom-white text-center">
                  Inscription
                </Text>
              </View>
              <Svg
                width={"100%"}
                style={{ aspectRatio: 1440 / 320 }}
                viewBox="0 0 1440 320"
              >
                <Path
                  fill={Colors.CUSTOM_BLACK}
                  d="M0,320L18.5,282.7C36.9,245,74,171,111,160C147.7,149,185,203,222,197.3C258.5,192,295,128,332,122.7C369.2,117,406,171,443,165.3C480,160,517,96,554,58.7C590.8,21,628,11,665,37.3C701.5,64,738,128,775,133.3C812.3,139,849,85,886,80C923.1,75,960,117,997,149.3C1033.8,181,1071,203,1108,181.3C1144.6,160,1182,96,1218,80C1255.4,64,1292,96,1329,128C1366.2,160,1403,192,1422,208L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
                />
              </Svg>
            </View>

            {/* Form */}
            <View className="flex-1 w-full gap-14">
              <View className="px-14 gap-6">
                <InputForm
                  name="pseudo"
                  label="Pseudo"
                  control={control}
                  secureTextEntry={false}
                  required={true}
                  pattern={/^[a-zA-Z0-9_@-]*$/}
                  paternErrorMessage="Ce champ contient des caractères non autorisés."
                />
                <InputForm
                  name="email"
                  label="E-mail"
                  control={control}
                  secureTextEntry={false}
                  required={true}
                  pattern={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
                  paternErrorMessage="Adresse mail invalide."
                />
                <InputForm
                  name="password"
                  label="Mot de passe"
                  control={control}
                  secureTextEntry={true}
                  required={true}
                  pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
                  paternErrorMessage="Le mot de passe n'est pas assez sécurisé."
                />

                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="cgu"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <View className="items-center">
                      <View className="flex-row items-center justify-center">
                        <Checkbox
                          className="mr-2"
                          value={value}
                          onValueChange={onChange}
                          color={Colors.CUSTOM_GREEN}
                        />
                        <Text className="font-RubikMedium text-lg">
                          <Text>J'accepte les </Text>
                          <Link
                            href="/terms"
                            className="text-custom-blue underline"
                          >
                            Conditions générales
                          </Link>
                          <Text>{"\n"}et la </Text>
                          <Link
                            href="/privacy"
                            className="text-custom-blue underline"
                          >
                            Politique de confidentialité
                          </Link>
                          <Text>.</Text>
                        </Text>
                      </View>
                      {error && (
                        <Text className="text-red-500 text-lg font-bold">
                          Vous devez accepter les conditions pour continuer.
                        </Text>
                      )}
                    </View>
                  )}
                />
              </View>
              <Button
                backgroundColor="bg-custom-green"
                text="S'inscrire"
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </ScrollView>

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
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterPage;

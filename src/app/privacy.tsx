import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PrivacyModal = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text>Politique de confidentialité</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyModal;

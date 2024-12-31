import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TermsModal = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text>Conditions générales</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsModal;

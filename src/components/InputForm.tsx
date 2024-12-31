import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

type InputProps = {
  name: string;
  label: string;
  control: any;
  secureTextEntry?: boolean;
  required?: boolean;
  pattern?: RegExp;
  paternErrorMessage?: string;
};

const InputForm = ({
  name,
  label,
  control,
  secureTextEntry,
  required,
  pattern,
  paternErrorMessage,
}: InputProps) => {
  return (
    <Controller
      control={control}
      rules={{ required: required, pattern: pattern }}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <Text className="font-RubikBold text-2xl pl-4 py-1">{label}</Text>
          <TextInput
            className={`border-2 rounded-2xl px-2 font-RubikMedium text-lg ${
              error ? "border-red-500" : ""
            }`}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
          />
          {error?.type === "pattern" && (
            <Text className="pl-3 text-red-500 text-lg font-bold">
              {paternErrorMessage}
            </Text>
          )}
          {/* si le champ est vide */}
          {error?.type === "required" && (
            <Text className="pl-3 text-red-500 text-lg font-bold">
              Ce champ est obligatoire
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default InputForm;

import { forwardRef } from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  backgroundColor: string;
  onPress?: any;
};

const Button = forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(({ text, backgroundColor, onPress, ...props }, ref) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      ref={ref}
      className={`${backgroundColor} rounded-2xl w-3/4 flex justify-center items-center self-center py-4 px-2`}
      {...props}
    >
      <Text className="text-4xl font-GlutenMedium text-custom-black text-center">
        {text}
      </Text>
    </TouchableOpacity>
  );
});
export default Button;

import { forwardRef } from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  backgroundColor: string;
};

const Button = forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(({ text, backgroundColor }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      className={`${backgroundColor} rounded-2xl w-3/4 flex justify-center items-center py-4 px-2`}
    >
      <Text className="text-4xl font-GlutenMedium text-custom-black text-center">
        {text}
      </Text>
    </TouchableOpacity>
  );
});
export default Button;

import { useForm } from "react-hook-form";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  cgu: boolean;
};

const useRegisterForm = () => {
  const { handleSubmit, control, reset } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form submitted:", data);
    reset();
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};

export default useRegisterForm;

import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

const useLoginForm = () => {
  const { handleSubmit, control, reset } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    reset();
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};

export default useLoginForm;

import { IAuthData } from "@/types/auth";
import { useState } from "react";

export function useForm(initialValues: IAuthData) {
  const [inputs, setInputs] = useState(initialValues);

  const handleChange = (name: string, value: string) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initialValues);
  };

  return {
    inputs,
    setInputs,
    handleChange,
    resetForm,
  };
}

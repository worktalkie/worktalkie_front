import React from "react";
import { UseFormRegister } from "react-hook-form";
import { TextInput } from "../common";
import { ContentTitle } from "../home";

type SignupInputProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "password";
  register: UseFormRegister<any>;
  errorMessage?: string;
};

export const SignupInput: React.FC<SignupInputProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  register,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id}>
        <ContentTitle>{label}</ContentTitle>
      </label>
      <TextInput
        id={id}
        type={type}
        {...register(id)}
        placeholder={placeholder}
        className="w-full"
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

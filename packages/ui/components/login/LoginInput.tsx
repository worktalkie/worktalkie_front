import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TextInput } from "../common";

type LoginType = {
  ID: string;
  PW: string;
};

type LoginInputProps = {
  register: UseFormRegister<LoginType>;
  errors: FieldErrors<LoginType>;
};

export const LoginInput = ({ register, errors }: LoginInputProps) => {
  return (
    <div className="InputWrapper flex gap-2.5 flex-col items-center mb-[16px]">
      {/* ID 입력 필드 */}
      <TextInput
        placeholder="ID"
        {...register("ID", { required: "ID를 입력해 주세요." })}
      />
      {errors.ID && (
        <span className="text-red-500 text-xs text-left w-[270px]">
          {errors.ID.message}
        </span>
      )}

      {/* PW 입력 필드 */}
      <TextInput
        type="password"
        placeholder="Password"
        {...register("PW", { required: "비밀번호를 입력해 주세요." })}
      />
      {errors.PW && (
        <span className="text-red-500 text-xs text-left w-[270px]">
          {errors.PW.message}
        </span>
      )}
    </div>
  );
};

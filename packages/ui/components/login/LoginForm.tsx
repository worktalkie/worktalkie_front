"use client";

import { login } from "@/packages/shared/utils/supabase/action";
import { Divider, ErrorToast, LongButton, TextInput } from "@/packages/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type loginType = {
  ID: string;
  PW: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<loginType> = (data) => {
    login(data.ID, data.PW)
      .then((success) => {
        if (success) {
          router.push("/home");
        }
      })
      .catch(() => {
        setErrorMessage("로그인에 실패했습니다. 다시 시도해주세요.");
        setOpen(true);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-screen gap-2.5 flex-col items-center"
      >
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

        <LongButton type="submit">Log In</LongButton>
        <Divider />
        <LongButton bgColor="#03c75a">
          <NaverLogin />
        </LongButton>
      </form>

      <ErrorToast open={open} setOpen={setOpen} errorMessage={errorMessage} />
    </>
  );
};

const NaverLogin = () => {
  return (
    <div className="flex justify-center align-middle gap-3 leading-4">
      <Image
        src="/assets/images/Naver.png"
        alt="Naver logo"
        width={16}
        height={16}
      />
      네이버 로그인
    </div>
  );
};

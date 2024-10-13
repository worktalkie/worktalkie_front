"use client";

import { login } from "@/packages/shared/utils/supabase/action";
import { Divider, ErrorToast, LoginInput, LongButton } from "@/packages/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
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

  const handleSignup = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/signup");
  };

  const handleNaverLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-screen gap-2.5 flex-col items-center"
      >
        <LoginInput register={register} errors={errors} />

        <LongButton type="submit">Log In</LongButton>
        <LongButton
          onClick={handleSignup}
          bgColor="#D3DDFF"
          textColor="#4D4AFE"
        >
          회원가입
        </LongButton>
        <Divider />
        <LongButton bgColor="#03c75a" onClick={handleNaverLogin}>
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

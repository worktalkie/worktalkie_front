"use client";

import { Divider, LongButton, TextInput } from "@/packages";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginType } from "../types";

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginType>();
  const onSubmit: SubmitHandler<loginType> = (data) => {
    console.log(data);
    router.push("/home");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-screen gap-2.5 flex-col items-center"
    >
      <TextInput placeholder="ID" {...register("ID", { required: true })} />
      <TextInput
        placeholder="Password"
        {...register("PW", { required: true })}
      />

      <LongButton type="submit">Log In</LongButton>
      <Divider />
      <LongButton bgColor="#03c75a">
        <NaverLogin />
      </LongButton>
    </form>
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

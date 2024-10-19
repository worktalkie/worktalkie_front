"use client";

import { ContentHeader, LongButton, SignupInput } from "@/packages/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const stepSchemas: Record<number, z.ZodSchema<any>> = {
  1: z.object({
    name: z.string().min(1, "이름을 입력해주세요"),
  }),
  2: z.object({
    email: z.string().email("유효한 이메일 주소를 입력해주세요"),
  }),
  3: z.object({
    id: z.string().min(1, "ID를 입력해주세요"),
  }),
  4: z
    .object({
      password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다"),
      confirmPassword: z.string().min(6, "비밀번호 확인을 입력해주세요"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "비밀번호가 일치하지 않습니다",
      path: ["confirmPassword"],
    }),
};

type FormValues = {
  name: string;
  email: string;
  id: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    id: "",
    password: "",
    confirmPassword: "",
  });
  const [currentStep, setCurrentStep] = useState<number>(1);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(stepSchemas[currentStep]),
    defaultValues: formValues,
  });

  useEffect(() => {
    setValue("name", formValues.name);
    setValue("email", formValues.email);
    setValue("id", formValues.id);
    setValue("password", formValues.password);
    setValue("confirmPassword", formValues.confirmPassword);
  }, [formValues, setValue]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));

    console.log("제출된 데이터:", data);

    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      console.log("최종 제출", data);
    }
  };

  return (
    <div className="w-full p-6">
      <ContentHeader title="회원가입" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <SignupInput
            id="name"
            label="이름"
            placeholder="성함을 입력해주세요"
            register={register}
            errorMessage={errors.name?.message}
          />
        )}
        {currentStep === 2 && (
          <SignupInput
            id="email"
            label="이메일"
            placeholder="이메일 주소를 입력해주세요"
            register={register}
            errorMessage={errors.email?.message}
          />
        )}
        {currentStep === 3 && (
          <SignupInput
            id="id"
            label="ID"
            placeholder="사용하실 ID를 입력해주세요"
            register={register}
            errorMessage={errors.id?.message}
          />
        )}
        {currentStep === 4 && (
          <>
            <SignupInput
              id="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요"
              type="password"
              register={register}
              errorMessage={errors.password?.message}
            />
            <SignupInput
              id="confirmPassword"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력하세요"
              type="password"
              register={register}
              errorMessage={errors.confirmPassword?.message}
            />
          </>
        )}

        <LongButton fullWidth type="submit">
          {currentStep === 4 ? "제출" : "다음"}
        </LongButton>
      </form>
    </div>
  );
}

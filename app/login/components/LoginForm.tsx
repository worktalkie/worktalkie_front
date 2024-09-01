"use client";

import { Button, TextField } from "@radix-ui/themes";
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
      <TextField.Root
        variant="surface"
        placeholder="ID"
        size="3"
        className="w-[273px]"
        {...register("ID", { required: true })}
      >
        <TextField.Slot pl="10px" />
        <TextField.Slot pr="10px" />
      </TextField.Root>
      {errors.ID && <span>This field is required</span>}
      <TextField.Root
        variant="surface"
        placeholder="PW"
        size="3"
        className="w-[273px]"
        {...register("PW", { required: true })}
      >
        <TextField.Slot pl="10px" />
        <TextField.Slot pr="10px" />
      </TextField.Root>
      {errors.PW && <span>This field is required</span>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

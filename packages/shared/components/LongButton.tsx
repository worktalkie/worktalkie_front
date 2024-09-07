"use client";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  bgColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LongButton = ({
  bgColor = "#4d4afe",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`mt-[16px] w-[280px] h-[48px] bg-[${bgColor}] rounded-md cursor-pointer text-white font-semibold`}
      {...props}
    >
      {children}
    </button>
  );
};

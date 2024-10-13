"use client";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LongButton = ({
  bgColor = "#4d4afe",
  textColor = "#fff",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`w-[280px] h-[48px] rounded-md cursor-pointer font-semibold`}
      style={{ backgroundColor: bgColor, color: textColor }}
      {...props}
    >
      {children}
    </button>
  );
};

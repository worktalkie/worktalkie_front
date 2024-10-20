"use client";
import { cx } from "@/packages/shared";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LongButton = ({
  bgColor = "#4d4afe",
  textColor = "#fff",
  fullWidth = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(
        "h-[48px] rounded-md cursor-pointer font-semibold",
        fullWidth ? "w-full" : "w-[280px]"
      )}
      style={{ backgroundColor: bgColor, color: textColor }}
      {...props}
    >
      {children}
    </button>
  );
};

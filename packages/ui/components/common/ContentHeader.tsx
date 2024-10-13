"use client";

import ChevronLeft from "@/packages/icons/chevron-left.svg";
import MagnifyingGlassIcon from "@/packages/icons/magnifying-glass.svg";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

type ContentHeaderProps = {
  title: string;
  hasSearch?: boolean;
  hasShadow?: boolean;
};

export const ContentHeader = ({
  title,
  hasSearch = false,
  hasShadow = false,
}: ContentHeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/search");
  };
  return (
    <>
      <div
        className="ContentHeaderWrapper fixed top-0 left-0 right-0 z-10 flex justify-between px-4 pt-[35px] pb-[13px] bg-white"
        style={{
          boxShadow: hasShadow ? "0 0 10px 0 rgba(0, 0, 0, 0.25)" : "none",
        }}
      >
        <button onClick={handleBack}>
          <ChevronLeft width="24" height="24" className="text-[#21266d]" />
        </button>
        <div className="HeaderText font-[pretendard] font-semibold text-[#21266d] text-[18px] tracking-[-0.18px]">
          {title}
        </div>
        {hasSearch && (
          <button onClick={handleSearch}>
            <MagnifyingGlassIcon
              width="24"
              height="24"
              className="text-[#21266d]"
            />
          </button>
        )}
      </div>
      <div className="mt-[95px]" />
    </>
  );
};

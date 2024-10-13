"use client";

import { useRouter } from "next/navigation";
import { PlusIcon } from "./PlusIcon";

type LoadMoreButtonProps = {
  path: string;
};
export const LoadMoreButton = ({ path }: LoadMoreButtonProps) => {
  const router = useRouter();
  return (
    <div
      className="HeaderButtonWrapper flex leading-[16px] align-center gap-1 mb-[6.5px]"
      onClick={() => {
        router.push(path);
      }}
    >
      <div className="font-[pretendard] font-medium text-[14px] text-[#21266d] leading-[16px] tracking-[-0.14px]">
        상황 더보기
      </div>
      <PlusIcon />
    </div>
  );
};

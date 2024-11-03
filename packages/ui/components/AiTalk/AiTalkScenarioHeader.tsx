"use client";

import ChevronLeftIcon from "@/packages/icons/chevron-left.svg";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Box } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

type AiTalkScenarioHeader = {
  title: string;
  category: string;
  estimatedTime: number;
};

export const AiTalkScenarioHeader = ({
  title,
  category,
  estimatedTime,
}: AiTalkScenarioHeader) => {
  const router = useRouter();
  return (
    <div className="HeaderWrapper bg-[#4D4AFE] py-[33px] px-[20px]">
      <Box
        className="IconButtonWrapper w-[29px] h-[38px]"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
      </Box>
      <div className="mt-[35px] flex flex-col items-center ">
        <Image
          src={`/assets/images/category_${category}.png`}
          width={68}
          height={68}
          alt="scenario category img"
        />
        <div className="HeaderTitle text-[#fdfdff] text-xl font-semibold font-[pretendard] mt-4 mb-2">
          {title}
        </div>
        <div className="estimatedTimeWrapper text-white font-[pretendard] flex text-sm leading-4.5 items-center gap-1">
          <ClockIcon width={16} height={16} />
          예상 소요 시간 {estimatedTime}분
        </div>
      </div>
    </div>
  );
};

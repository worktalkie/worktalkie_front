"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type DailyLearningType = {
  title: string;
  description?: string;
  imageSrc?: string;
  buttonText?: string;
  path: string;
};
export const DailyLearningCard = ({
  title = "환불하기",
  description = "예상소요시간 3분",
  imageSrc = "/assets/images/category_call.png",
  buttonText = "학습하기",
  path = "/AiTalk/chat/1",
}: DailyLearningType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(path);
  };
  return (
    <div className="CardWrapper w-[100%] mt-1.5">
      <div className="CardContent bg-[#f7f9ff] w-[100%] flex px-3 py-4 gap-3 rounded-b-none rounded-t border border-[#e1e8ff]">
        <div className="ImageContainer relative overflow-hidden w-[44px] h-[44px] rounded-md">
          <Image src={imageSrc} fill alt="daily learning thumbnail" />
        </div>
        <div className="flex flex-col">
          <div className="text-[#21266d] font-bold line-clamp-1">{title}</div>
          <div className="w-[100%] text-[#62636C] text-sm line-clamp-1">
            {description}
          </div>
        </div>
      </div>
      <button
        className="bg-[#4d4afe] text-white w-[100%] h-[49px] text-center rounded-b font-[pretendard] font-semibold"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

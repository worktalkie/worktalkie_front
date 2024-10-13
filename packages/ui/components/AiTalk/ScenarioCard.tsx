"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type ScenarioCardProps = {
  data: {
    title: string;
    id: string;
    imageSrc: string;
  };
};

export const ScenarioCard = ({ data }: ScenarioCardProps) => {
  const router = useRouter();
  return (
    <div
      className="Card w-[calc(50%-8px)] aspect-square rounded-[4px] bg-[#4d4afe] p-[10px] relative"
      onClick={() => {
        router.push(`/AiTalk/category/${data.id}`);
      }}
    >
      <div className="ImageContainer absolute top-[10px] right-[10px] overflow-hidden w-[40%] aspect-square rounded-full bg-[#a9baff]">
        <Image
          src={data.imageSrc}
          fill
          alt="article thumbnail"
          className="object-cover"
        />
      </div>
      <div className="w-[65%] font-bold font-[pretendard] text-white break-keep line-clamp-2 absolute bottom-2 left-2">
        {data.title}
      </div>
    </div>
  );
};

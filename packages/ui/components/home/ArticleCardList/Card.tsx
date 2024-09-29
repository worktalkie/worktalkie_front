"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type CardProps = {
  data: {
    title: string;
    description: string;
    path: string;
    imageSrc: string;
  };
};

export const Card = ({ data }: CardProps) => {
  const router = useRouter();
  return (
    <div
      className="CardContent w-[calc(50%-1rem)] rounded"
      onClick={() => {
        router.push(data.path);
      }}
    >
      <div className="ImageContainer relative overflow-hidden w-[100%] h-[100px] rounded-md">
        <Image
          src={data.imageSrc}
          fill
          alt="article thumbnail"
          className="object-cover"
        />
      </div>
      <div className="font-semibold font-[pretendard] text-sm break-keep line-clamp-2 mt-2 mb-1.5">
        {data.title}
      </div>
      <div className="font-[pretendard] text-[#80828d] text-xs break-keep line-clamp-2 mb-3">
        {data.description}
      </div>
    </div>
  );
};

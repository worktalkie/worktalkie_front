"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type ScenarioListProps = {
  data: {
    title: string;
    description: string;
    path: string;
    imageSrc: string;
    hot?: boolean;
  }[];
};

export const ScenarioList = ({ data }: ScenarioListProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1.5">
      {data.map((item) => (
        <div
          key={item.title}
          className="CardContent bg-[#f7f9ff] w-[100%] flex px-3 py-4 gap-3 rounded-b-none rounded-t border border-[#e1e8ff] justify-between items-center"
          onClick={() => {
            router.push(item.path);
          }}
        >
          <div className="flex gap-3">
            <div className="ImageContainer relative overflow-hidden w-[44px] h-[44px] rounded-md">
              <Image src={item.imageSrc} fill alt="daily learning thumbnail" />
            </div>
            <div className="flex flex-col">
              <div className="text-[#21266d] font-bold line-clamp-1">
                {item.title}
              </div>
              <div className="w-[100%] text-[#62636C] text-sm line-clamp-1">
                {item.description}
              </div>
            </div>
          </div>
          {item.hot && (
            <div className="ImageContainer relative overflow-hidden w-[50px] h-[22px] rounded-md">
              <Image
                src="/assets/images/flag_HOT.png"
                fill
                alt="daily learning thumbnail"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

import Image from "next/image";

export const BI = () => {
  return (
    <>
      <div className="flex w-screen h-235 flex-col items-center justify-around gap-7">
        <Image
          src="/assets/images/BI.png"
          alt="BI_white"
          width={62}
          height={62}
          priority
        />
        <Image
          src="/assets/images/logotype.png"
          alt="BI_white"
          width={198}
          height={32}
          priority
        />
      </div>
      <div className="font-semibold mt-5 mb-8 text-[#21266d] text-sm tracking-[-0.14px] ">
        사회의 일원으로 가는 시그널, 워크토키입니다
      </div>
    </>
  );
};

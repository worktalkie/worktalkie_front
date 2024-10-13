import Image from "next/image";
import { ContentCaption, ContentTitle } from "../ContentLayout";

export const Stamp = () => {
  return (
    <div className="w-[100%] mt-[35px] mb-[50px]">
      <ContentTitle>매일 찍는 출석도장 챌린지</ContentTitle>
      <ContentCaption>매일매일 자라나는 신입사원이 되어보세요</ContentCaption>
      <div className="StampWrapper flex w-[100%] justify-around mt-5">
        <Image
          width={56}
          height={56}
          alt="stamp"
          src={"/assets/images/stamp_true.png"}
        />
        <Image
          width={56}
          height={56}
          alt="stamp"
          src={"/assets/images/stamp_false.png"}
        />
        <Image
          width={56}
          height={56}
          alt="stamp"
          src={"/assets/images/stamp_false.png"}
        />
        <Image
          width={56}
          height={56}
          alt="stamp"
          src={"/assets/images/stamp_false.png"}
        />
        <Image
          width={56}
          height={56}
          alt="stamp"
          src={"/assets/images/stamp_false.png"}
        />
      </div>
    </div>
  );
};

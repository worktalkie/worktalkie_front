import { LoadMoreButton } from "../../common";
import { ContentTitle } from "../ContentLayout";
import { CardStack } from "./CardStack";

type articleItem = {
  title: string;
  description: string;
  path: string;
  imageSrc: string;
};

const data: articleItem[] = [
  {
    title: "부장님도 모르는 돌려서 거절하기 1탄",
    description:
      "신입이어도 NO를 외쳐야하는 날이 꼭 오기 마련이죠 예의바르게 NO 외치기...",
    imageSrc: "/assets/images/testimage2.jpg",
    path: "/article/1",
  },
  {
    title: "외국계 회사에도 꼽주는 표현이 있나요?",
    description:
      "항상 착하게 말하는 내 외국인 상사! 이게 꼽주는 거라고!?!? 정말 상상도 못했다...",
    imageSrc: "/assets/images/testimage2.jpg",
    path: "/article/2",
  },
  {
    title: "안돼요! 바빠요! 혼자 일하는 스타트업 신입이 거절하는법",
    description:
      "에디터 J는 스타트업에서 혼자 디자이너로 일하고 있어요. 일정상 거절하는 일...",
    imageSrc: "/assets/images/testimage2.jpg",
    path: "/article/3",
  },
  {
    title: "오늘은 못가겠어요...병가 및 연차 신청하는법",
    description:
      "신입은 아프면 안되냐? 아프니까 청춘이다! 오늘은 신입이 병가내는 법을 알려...",
    imageSrc: "/assets/images/testimage2.jpg",
    path: "/article/4",
  },
];

export const ArticleCardList = () => {
  return (
    <div className="MagazineCardListtWrapper mt-[35px] mb-[60px]">
      <div className="CotentHeader mb-3 flex justify-between items-center">
        <ContentTitle>매거진</ContentTitle>
        <LoadMoreButton path="/article" />
      </div>
      <CardStack data={data} />
    </div>
  );
};

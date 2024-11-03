import { ScenarioCard } from "./ScenarioCard";

type cardItem = {
  title: string;
  id: string;
  imageSrc: string;
};

const data: cardItem[] = [
  {
    title: "비즈니스 통화하기",
    imageSrc: "/assets/images/category_call.png",
    id: "1",
  },
  {
    title: "회사 내 스몰토크하기",
    imageSrc: "/assets/images/category_talk.png",
    id: "2",
  },
  {
    title: "연차 사용 및 병가 문의하기",
    imageSrc: "/assets/images/category_sick.png",
    id: "3",
  },
  {
    title: "업무상황 보고하기",
    imageSrc: "/assets/images/category_achievement.png",
    id: "4",
  },
  {
    title: "타 부서와 협업하기",
    imageSrc: "/assets/images/category_call.png",
    id: "5",
  },
  {
    title: "불합리 대처하기",
    imageSrc: "/assets/images/category_emergency.png",
    id: "6",
  },
];

export const ScenarioCardList = () => {
  return (
    <div className="ScenarioCardsWrapper flex flex-wrap gap-4 justify-between pb-[80px] mt-4">
      {data.map((d) => (
        <ScenarioCard key={d.id} data={d} />
      ))}
      <div className="clear-both" />
    </div>
  );
};

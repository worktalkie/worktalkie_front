import { ReactNode } from "react";
import { CarouselLayout } from "../CarouselLayout";
import { DailyLearningCard } from "../layout/DailyLearning";

const data = [
  { title: "제목 1", description: "예상소요시간 3분", path: "AiTalk/1" },
  { title: "제목 2", description: "예상소요시간 3분", path: "AiTalk/2" },
  { title: "제목 3", description: "예상소요시간 3분", path: "AiTalk/3" },
];

const DailyLearningSlides: ReactNode[] = data.map(
  ({ title, description, path }) => {
    return (
      <DailyLearningCard title={title} description={description} path={path} />
    );
  }
);

export const DailyLearning = () => {
  return (
    <div className="DailyLearningWrapper">
      <div className="text-lg font-bold mb-3 text-[#21266D] font-[pretendard]">
        오늘의 추천학습
      </div>
      <CarouselLayout slides={DailyLearningSlides} />
    </div>
  );
};

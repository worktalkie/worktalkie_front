import { LoadMoreButton, ScenarioList } from "../../common";
import { ContentTitle } from "../ContentLayout";

type ScenarioItem = {
  title: string;
  description: string;
  id: string;
  imageSrc: string;
  hot?: boolean;
};

const data: ScenarioItem[] = [
  {
    title: "제목 1",
    description: "예상소요시간 3분",
    id: "1",
    imageSrc: "/assets/images/testimage.png",
    hot: true,
  },
  {
    title: "제목 2",
    description: "예상소요시간 3분",
    id: "2",
    imageSrc: "/assets/images/testimage.png",
    hot: true,
  },
  {
    title: "제목 3",
    description: "예상소요시간 3분",
    id: "3",
    imageSrc: "/assets/images/testimage.png",
  },
];

export const PracticeList = () => {
  return (
    <div className="PracticeListWrapper mb-[50px]">
      <div className="CotentHeader mb-3 flex justify-between items-center">
        <ContentTitle>이런 상황도 연습해보세요</ContentTitle>
        <LoadMoreButton path="/AiTalk" />
      </div>
      <ScenarioList data={data} />
    </div>
  );
};

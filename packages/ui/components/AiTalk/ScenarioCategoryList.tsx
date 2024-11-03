import { ContentHeader, ScenarioList } from "../common";

type ScenarioItem = {
  title: string;
  description: string;
  id: string;
  imageSrc: string;
  hot?: boolean;
};

type categoryType = {
  title: string;
  list: ScenarioItem[];
};

const data: categoryType = {
  title: "비즈니스 통화하기",
  list: [
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
      imageSrc: "/assets/images/category_emergency.png",
    },
  ],
};

export const ScenarioCategoryList = () => {
  return (
    <>
      <ContentHeader title={data.title} />
      <ScenarioList data={data.list} />
    </>
  );
};

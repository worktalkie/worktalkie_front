import { ScenarioList, TextInput } from "../common";
import { ContentTitle } from "../home";

type ScenarioItem = {
  title: string;
  description: string;
  id: string;
  imageSrc: string;
  hot?: boolean;
};

type searchResultType = {
  title: string;
  list: ScenarioItem[];
};

const data: searchResultType = {
  title: "이런 상황도 연습해보세요",
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
      imageSrc: "/assets/images/testimage.png",
    },
  ],
};

export const SearchResult = () => {
  return (
    <>
      <div className="SearchInputWrapper mb-[80px] px-4">
        <TextInput
          placeholder="원하는 키워드를 검색하세요"
          className="w-full"
        />
        <div className="ScenarioListWrapper mt-[34.5px] flex flex-col gap-3.5">
          <ContentTitle>{data.title}</ContentTitle>
          <ScenarioList data={data.list} />
        </div>
      </div>
    </>
  );
};

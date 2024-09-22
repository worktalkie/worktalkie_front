import { ReactNode } from "react";
import { ContentCaption, ContentTitle } from "../../ContentLayout";
import { CarouselLayout } from "../CarouselLayout";
import { RatingsCard } from "../layout/Ratings";

const data = {
  user: "정지혜",
  ratings: [
    {
      type: "유창도",
      rating: [
        { date: "03.28", score: 40 },
        { date: "03.28", score: 60 },
        { date: "03.28", score: 75 },
        { date: "03.28", score: 100 },
      ],
    },
    {
      type: "업무 매너",
      rating: [
        { date: "03.28", score: 40 },
        { date: "03.28", score: 60 },
        { date: "03.28", score: 75 },
        { date: "03.28", score: 80 },
      ],
    },
    {
      type: "미션 달성도",
      rating: [
        { date: "03.28", score: 100 },
        { date: "03.28", score: 100 },
        { date: "03.28", score: 100 },
        { date: "03.28", score: 100 },
      ],
    },
  ],
};

export const Ratings = () => {
  const { user, ratings } = data;

  const RatingSlides: ReactNode[] = ratings.map(({ type, rating }) => {
    return (
      <div className="RatingsWrapper w-[100%] ">
        <ContentTitle>
          {user}님의 <span className="text-[#4d4afe]">{type}</span>는 100점
          만점에 {rating[3]?.score}점!
        </ContentTitle>
        <ContentCaption>스와이프하여 점수를 확인하세요</ContentCaption>
        <RatingsCard data={rating} />
      </div>
    );
  });

  return (
    <div>
      <CarouselLayout slides={RatingSlides} />
    </div>
  );
};

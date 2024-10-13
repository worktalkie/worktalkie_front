import { Card } from "./Card";

type CardStackProps = {
  data: {
    title: string;
    description: string;
    path: string;
    imageSrc: string;
  }[];
};
export const CardStack = ({ data }: CardStackProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between mb-[120px]">
      {data.map((cardData) => {
        return <Card data={cardData} />;
      })}
    </div>
  );
};

type RatingsType = {
  date: string;
  score: number;
};
type RatingsCardProps = {
  data: RatingsType[];
};

export const RatingsCard = ({ data }: RatingsCardProps) => {
  return (
    <div className="BarGraphWrapper flex justify-around items-end px-[30px] h-[225px] mt-7">
      {data.map((d, i) => (
        <div
          key={d.date}
          className="barWrapper flex-col justify-center text-center"
        >
          <div
            className="bar rounded w-[40px]"
            style={{
              height: `${d.score * 2}px`,
              backgroundColor:
                i === 0
                  ? "#e0e1e6"
                  : i === 1
                  ? "#cdced7"
                  : i === 2
                  ? "#8b8d98"
                  : i === 3
                  ? "#4d4afe"
                  : "#e0e1e6",
            }}
          />
          <div
            className="score text-[12px] mt-[7px]"
            style={{
              color: i === 3 ? "#4d4afe" : "#b9bbc6",
            }}
          >
            {d.date}
          </div>
        </div>
      ))}
    </div>
  );
};

import CheckIcon from "@/packages/icons/mission-check.svg";

type AiTalkContentsProps = {
  contents: string;
  missions: string[];
};

export const AiTalkContents = ({ contents, missions }: AiTalkContentsProps) => {
  return (
    <div className="ContentsWrapper mx-4 my-5 px-5 py-6 bg-[#f9f9fb] rounded-lg flex flex-col gap-[22px]">
      <div className="ContentTitle font-[pretendard] font-semibold text-[#1e1f24]">
        대응할 상황
      </div>
      <div className="Content font-[pretendard] text-[#62636c]">{contents}</div>
      <div className="Divider w-full my-[5px] border-b border-dashed border-[#cdced7]" />
      <div className="ContentTitle font-[pretendard] font-semibold text-[#1e1f24]">
        달성할 미션
      </div>
      <div className="MissionsWrapper flex flex-col gap-3 break-keep">
        {missions.map((mission, i) => {
          return (
            <div key={i} className="Mission flex gap-3">
              <div className="IconWrapper w-4 h-4">
                <CheckIcon />
              </div>
              <div className="Content font-[pretendard] text-[#62636c] text-wrap">
                {mission}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

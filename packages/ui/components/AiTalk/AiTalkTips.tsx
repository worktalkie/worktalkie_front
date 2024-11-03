import TipIcon from "@/packages/icons/Tip.svg";

type AiTalkTipsProps = { tips: string[] };
export const AiTalkTips = ({ tips }: AiTalkTipsProps) => {
  return (
    <div className="TipsWrapper flex flex-col gap-2 mt-3 mb-5 px-4">
      {tips.map((tip) => {
        return (
          <div className="TipCard flex items-center gap-2.5 px-3 py-3.5  bg-[#edf1ff] rounded-lg">
            <div className="IconWrapper w-5 h-5">
              <TipIcon />
            </div>
            <div className="TipContent text-[#62636c] font-[pretendard] break-keep">
              {tip}
            </div>
          </div>
        );
      })}
    </div>
  );
};

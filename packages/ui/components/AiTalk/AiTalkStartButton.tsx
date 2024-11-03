"use client";

import { useScrollToBottom } from "@/packages/shared/hooks";
import { useRouter } from "next/navigation";
import { LongButton } from "../login";

type AiTalkStartButtonProps = {
  scenarioID: number;
  chatID: number;
};
export const AiTalkStartButton = ({
  scenarioID,
  chatID,
}: AiTalkStartButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    // ScenarioStart()
    router.push(`/AiTalk/chat/${scenarioID}/${chatID}`);
  };
  const isBottom = useScrollToBottom();

  return (
    <div className="ButtonWrapper fixed bottom-0 w-full h-[88px] pt-3 pb-6 px-4 bg-[#fdfdff] shadow-md border-t border-t-gray-200 z-50">
      <LongButton
        fullWidth
        onClick={isBottom ? handleClick : undefined}
        bgColor={isBottom ? "#4d4afe" : "#e0e1e6"}
        textColor={isBottom ? "#fff" : "#b9bbc6"}
      >
        시작하기
      </LongButton>
    </div>
  );
};

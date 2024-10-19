"use client";

import { ContentHeader, ContentTitle, ScenarioCardList } from "@/packages/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AiTalk = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <div className="AiTalkListWrapper px-4">
      <ContentHeader title="AI 토크" hasSearch />
      <ContentTitle>상황별 대화 연습하기</ContentTitle>
      <ScenarioCardList />
    </div>
  );
};

export default AiTalk;

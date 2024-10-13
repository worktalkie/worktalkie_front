"use client";

import { ScenarioCategoryList } from "@/packages/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ScenarioCategory = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <div className="AiTalkListWrapper px-4 mb-[80px]">
      <ScenarioCategoryList />
    </div>
  );
};

export default ScenarioCategory;

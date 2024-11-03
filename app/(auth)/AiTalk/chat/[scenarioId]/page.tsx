"use client";

import {
  AiTalkContents,
  AiTalkScenarioHeader,
  AiTalkStartButton,
  AiTalkTips,
} from "@/packages/ui";

const data = {
  title: "외부에서 온 전화 대응하기 1",
  category: "call",
  estimatedTime: 4,
  scenarioID: 2,
  chatID: 1,
  contents:
    "담당자가 자리를 비운 사이, 고객사에서 문의전화가 왔습니다. 사무실에는 당신 뿐! 과연 고객사에서는 어떤 문의사항이 있어 전화를 했을까요? 그리고 당신은 어떻게 대처해야 할까요?",
  missions: [
    "담당자가 자리를 비웠음을 알려줍니다",
    "담당자가 돌아오면 전달하겠다고 알려줍니다",
    "전화를 받은 사람(나)이 누구인지, 부서명과 이름을 포함하여 알려줍니다",
  ],
  tips: [
    "담당자가 자리를 비웠음을 알려줍니다",
    "담당자가 돌아오면 전달하겠다고 알려줍니다",
    "전화를 받은 사람(나)이 누구인지, 부서명과 이름을 포함하여 알려줍니다",
  ],
};

const Scenario = () => {
  const {
    title,
    estimatedTime,
    scenarioID,
    chatID,
    category,
    contents,
    missions,
    tips,
  } = data;

  return (
    <div className="ScenarioWrapper mb-[100px]">
      <AiTalkScenarioHeader
        title={title}
        category={category}
        estimatedTime={estimatedTime}
      />
      <AiTalkContents contents={contents} missions={missions} />
      <AiTalkTips tips={tips} />
      <AiTalkStartButton scenarioID={scenarioID} chatID={chatID} />
    </div>
  );
};

export default Scenario;

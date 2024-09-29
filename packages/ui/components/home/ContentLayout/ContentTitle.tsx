import { ReactNode } from "react";

type ContentTitleProps = {
  children: ReactNode;
};
export const ContentTitle = ({ children }: ContentTitleProps) => {
  return (
    <div className="title text-[18px] font-bold font-[pretendard] text-[#21266d] mb-1.5 break-keep">
      {children}
    </div>
  );
};

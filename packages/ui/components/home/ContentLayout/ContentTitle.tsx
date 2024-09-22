import { ReactNode } from "react";

type ContentTitleProps = {
  children: ReactNode;
};
export const ContentTitle = ({ children }: ContentTitleProps) => {
  return (
    <div className="title text-[18px] font-bold font-[pretendard] mb-1.5 break-keep">
      {children}
    </div>
  );
};

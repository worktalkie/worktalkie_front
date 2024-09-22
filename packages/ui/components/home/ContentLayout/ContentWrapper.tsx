import { ReactNode } from "react";

type ContentWrapperType = {
  children: ReactNode;
};
export const ContentWrapper = ({ children }: ContentWrapperType) => {
  return <div className="contentWrapper mx-[16px] mt-[24px]">{children}</div>;
};

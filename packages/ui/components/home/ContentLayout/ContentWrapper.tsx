import { ReactNode } from "react";

type ContentWrapperType = {
  children: ReactNode;
};
export const ContentWrapper = ({ children }: ContentWrapperType) => {
  return (
    <div className="contentWrapper mt-[24px] max-w-[410px] px-[16px] mx-auto">
      {children}
    </div>
  );
};

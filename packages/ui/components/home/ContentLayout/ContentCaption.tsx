import { ReactNode } from "react";

type ContentCaptionProps = {
  children: ReactNode;
};
export const ContentCaption = ({ children }: ContentCaptionProps) => {
  return (
    <div className="caption mb-2 text-[12px] text-[#62636c]">{children}</div>
  );
};

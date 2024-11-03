"use client";

import AiTalkIcon from "@/packages/icons/AiTalk.svg";
import AiTalkIconActive from "@/packages/icons/AiTalkActive.svg";
import HomeIcon from "@/packages/icons/Home.svg";
import HomeIconActive from "@/packages/icons/HomeActive.svg";
import MagazineIcon from "@/packages/icons/Magazine.svg";
import MagazineIconActive from "@/packages/icons/MagazineActive.svg";
import MyPageIcon from "@/packages/icons/Mypage.svg";
import MyPageIconActive from "@/packages/icons/MypageActive.svg";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    path: "/home",
    label: "홈",
    SvgIcon: HomeIcon,
    SvgIconActive: HomeIconActive,
  },
  {
    path: "/AiTalk",
    label: "AI 토크",
    SvgIcon: AiTalkIcon,
    SvgIconActive: AiTalkIconActive,
  },
  {
    path: "/article",
    label: "매거진",
    SvgIcon: MagazineIcon,
    SvgIconActive: MagazineIconActive,
  },
  {
    path: "/myPage",
    label: "마이페이지",
    SvgIcon: MyPageIcon,
    SvgIconActive: MyPageIconActive,
  },
];

export const NavBar = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const disabledPath = currentPath.startsWith("/AiTalk/chat");

  return disabledPath ? null : (
    <nav className="fixed bottom-0 w-full h-[72px] bg-[#fdfdff] shadow-md border-t border-t-gray-200 z-50">
      <ul className="flex justify-around items-center h-full">
        {navItems.map(({ path, label, SvgIcon, SvgIconActive }) => (
          <li
            key={path}
            onClick={() => router?.push(path)}
            className="cursor-pointer"
          >
            <div className="flex flex-col items-center">
              {currentPath.startsWith(path) ? <SvgIconActive /> : <SvgIcon />}
              <span className="text-[#8b8d98] mt-2 text-[10px] font-semibold">
                {label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { path: "/home", label: "홈", img: "/assets/images/navbtn" },
  { path: "/AiTalk", label: "AI 토크", img: "/assets/images/navbtn" },
  { path: "/article", label: "매거진", img: "/assets/images/navbtn" },
  { path: "/myPage", label: "마이페이지", img: "/assets/images/navbtn" },
];

export const NavBar = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <nav className="fixed bottom-0 w-full h-[72px] bg-[#fdfdff] shadow-md border-t border-t-gray-200 z-50">
      <ul className="flex justify-around items-center h-full">
        {navItems.map(({ path, label, img }) => (
          <li
            key={path}
            onClick={() => router.push(path)}
            className="cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <Image
                src={
                  currentPath === path
                    ? `${img}_active.png`
                    : `${img}_default.png`
                }
                alt={label}
                width={28}
                height={28}
              />
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

"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-[#4d4afe] container mx-auto pt-[35px] flex items-center justify-between py-[13px] px-[16px]">
        <Image
          src="/assets/images/logotype_fullwhite.png"
          alt="logotype_fullwhite"
          width={131}
          height={20}
        />
        <button>
          <MagnifyingGlassIcon className="w-[24px] text-white" />
        </button>
      </div>
    </header>
  );
};

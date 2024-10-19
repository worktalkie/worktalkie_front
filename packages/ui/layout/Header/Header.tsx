"use client";

import MagnifyingGlassIcon from "@/packages/icons/magnifying-glass.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const handleSearch = () => {
    router.push("/search");
  };
  return (
    <header className="bg-[#4d4afe] shadow-md z-50">
      <div className="bg-[#4d4afe] container max-w-[425px] mx-auto pt-[35px] flex items-center justify-between py-[13px] px-[16px]">
        <Image
          src="/assets/images/logotype_fullwhite.png"
          alt="logotype_fullwhite"
          width={131}
          height={20}
        />
        <button>
          <MagnifyingGlassIcon
            width="24"
            height="24"
            className="text-white"
            onClick={handleSearch}
          />
        </button>
      </div>
    </header>
  );
};

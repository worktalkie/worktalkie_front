"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/login");
  }, 1500);

  return (
    <main className="flex w-screen h-screen items-center justify-center bg-[#4D4AFE]">
      <div className="flex w-screen h-235 flex-col items-center justify-around gap-7">
        <Image
          src="/assets/images/BI_white.png"
          alt="BI_white"
          width={62}
          height={62}
        />
        <Image
          src="/assets/images/logotype_white.png"
          alt="BI_white"
          width={198}
          height={32}
        />
      </div>
    </main>
  );
}

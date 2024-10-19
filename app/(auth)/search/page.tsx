"use client";

import { ContentHeader } from "@/packages/ui";
import { SearchResult } from "@/packages/ui/components/Search/SearchResult";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Search = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <>
      <ContentHeader title="검색" />
      <SearchResult />
    </>
  );
};

export default Search;

"use client"

import Search from "@/app/features/search";
import React, { Suspense } from "react";

const SearchPage: React.FC = () => {
  return (
    <Suspense>
    <Search/>
    </Suspense>
  );
};

export default SearchPage;

"use client"

import React, { Suspense } from "react";
import Search from "@/app/components/templates/Search";

const SearchPage: React.FC = () => {
  return (
    <Suspense>
    <Search/>
    </Suspense>
  );
};

export default SearchPage;

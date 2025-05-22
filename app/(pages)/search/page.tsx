"use client"

import { NotificationBlock } from "@/app/components/ui/NotificationBlock";
import Search from "@/app/features/search";
import React, { Suspense } from "react";

const SearchPage: React.FC = () => {
  return (
    <Suspense fallback={<NotificationBlock type="info" message="Loading..."/>}>
      <Search />
    </Suspense>
  );
};

export default SearchPage;

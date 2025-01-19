"use client"

import ProfileSection from "./components/ProfileSection";
import SavedRecipes from "./components/SavedRecipes";

export default function Profile() {
  return (
    <div className="flex flex-col-reverse xl:flex-row items-start justify-start min-h-screen w-full px-4 xl:px-28 md:px-8 mt-2 pb-8">
      <SavedRecipes />
      <ProfileSection/>
    </div>
  );
}

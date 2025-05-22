"use client"

import { NotificationBlock } from "@/app/components/ui/NotificationBlock";
import ProfileSection from "./components/ProfileSection";
import SavedRecipes from "./components/SavedRecipes";
import { useAuth } from '@/app/contexts/UserContext';

export default function Profile() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <NotificationBlock type='info' message="Checking if you are signed in..." />
    );
  }

  if (!user) {
    return (
      <NotificationBlock type='error' message="You must be signed in to view this page." />
    );
  }
  return (
    <div className="flex flex-col-reverse xl:flex-row items-start justify-start min-h-screen w-full px-4 xl:px-28 md:px-8 mt-2 pb-8">
      <SavedRecipes />
      <ProfileSection/>
    </div>
  );
}

"use client"
import { ErrorNotificationBlock, InfoNotificationBlock } from "@/app/components/atoms/NotificationBlock";
import { useAuth } from "@/app/context/UserContext";
import { signOut } from "@/app/libs/firebase/auth";
import { useRouter } from "next/navigation";
import SavedRecipes from "./SavedRecipes";
import ProfileSection from "../organisms/ProfileSection";

export default function Profile() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <InfoNotificationBlock message="Checking if you are signed in..." />
    );
  }

  if (!user) {
    return (
      <ErrorNotificationBlock message="You must be signed in to view this page." />
    );
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row items-start justify-start min-h-screen w-full px-4 xl:px-28 md:px-8 mt-2 pb-8">
      <SavedRecipes />
      <ProfileSection user={user} handleSignOut={handleSignOut}/>
    </div>
  );
}

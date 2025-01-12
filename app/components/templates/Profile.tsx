"use client"
import { ErrorNotificationBlock, InfoNotificationBlock } from "@/app/components/atoms/NotificationBlock";
import { useAuth } from "@/app/context/UserContext";
import { signOut } from "@/app/libs/firebase/auth";
import { useRouter } from "next/navigation";
import { RegularText } from "../atoms/Texts";
import { LargeIcon } from "../atoms/Icons";
import { MediumButton } from "../atoms/Buttons";

export default function Profile() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <InfoNotificationBlock message="Checking if you are signed in..."/>
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
    <div className="min-h-screen bg-gray-100 flex align-middle items-start justify-center pt-12">
      <div className="bg-white shadow-md p-6 max-w-sm w-full">

        <div className="items-center flex justify-center flex-col">
          <RegularText>Welcome,</RegularText>
          <RegularText className="mb-4">{user.displayName || user.email}</RegularText>
          
          {user.photoURL && (
            <LargeIcon
              iconSrc={user.photoURL}
            />
          )}
        </div>
        <MediumButton
          onClick={handleSignOut}
          className="w-full mt-8 font-bold"
        >
          Sign Out
        </MediumButton>
      </div>
    </div>
  );
}

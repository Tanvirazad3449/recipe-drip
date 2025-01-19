import React from 'react'
import { RegularText } from '@/app/components/ui/Texts'
import { ImageIcon } from '@/app/components/ui/ImageIcon'
import { Button } from '@/app/components/ui/Button'
import { signOut } from "@/app/libs/firebase/auth";
import { NotificationBlock } from '@/app/components/ui/NotificationBlock'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/contexts/UserContext';

function ProfileSection() {

  const { user, loading } = useAuth();
  const router = useRouter();

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

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <div className="w-full xl:w-1/3 mt-8 bg-white border border-gray-200 p-8 ml-0 xl:ml-16">

        <div className="items-center flex justify-center flex-col">
          <RegularText>Welcome,</RegularText>
          <RegularText className="mb-4">{user.displayName || user.email}</RegularText>

          {user.photoURL && (
            <ImageIcon
              iconSrc={user.photoURL}
            />
          )}
        </div>
        <Button
          onClick={handleSignOut}
          className="w-full mt-4 font-bold"
        >
          Sign Out
        </Button>
      </div>
  )
}

export default ProfileSection
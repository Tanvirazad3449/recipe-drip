import React from 'react'
import { RegularText } from '../atoms/Texts'
import { LargeIcon } from '../atoms/Icons'
import { MediumButton } from '../atoms/Buttons'
import { User } from 'firebase/auth'

interface ProfileSectionProps{
    user: User;
    handleSignOut: ()=>void;
}
function ProfileSection({user, handleSignOut}: ProfileSectionProps) {
  return (
    <div className="w-full md:w-1/3 mt-8 bg-white border border-gray-200 p-8 ml-0 md:ml-16">

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
          className="w-full mt-4 font-bold"
        >
          Sign Out
        </MediumButton>
      </div>
  )
}

export default ProfileSection